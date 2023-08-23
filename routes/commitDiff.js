var express = require("express");
var router = express.Router();
const { Octokit, App } = require("octokit");

/* GET diff of a commit by id */
router.get("/:owner/:repo/commits/:basehead/diff", async (req, res, next) => {
  const { owner, repo, basehead } = req.params;
  const token = process.env.TOKEN;
  const octokit = new Octokit({ auth: token });

  const response = await octokit.request(`GET /repos/${owner}/${repo}/compare/${basehead}`, {
    owner: 'OWNER',
    repo: 'REPO',
    basehead: 'BASEHEAD',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return res.json(response.data);
});

module.exports = router;
