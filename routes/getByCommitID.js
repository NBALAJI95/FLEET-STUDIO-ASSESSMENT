var express = require("express");
var router = express.Router();
const { Octokit, App } = require("octokit");
require('dotenv').config();

/* GET commit by id */
router.get("/:owner/:repo/commits/:ref", async (req, res, next) => {
  const { owner, repo, ref } = req.params;
  const token = process.env.TOKEN;
  const octokit = new Octokit({ auth: token });

  const response = await octokit.request(`GET /repos/${owner}/${repo}/commits/${ref}`, {
    owner: 'OWNER',
    repo: 'REPO',
    ref: 'REF',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  return res.json(response.data);
});

module.exports = router;
