"use strict";
const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  issuePrefixes: ["TN-"],
  issueUrlFormat: "https://pantheonlabai.atlassian.net/browse/{{prefix}}{{id}}",
});
