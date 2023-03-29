const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file

  problem = {
    message: 'This is a warning',
    level: 'warning',
    properties: {
        title: "<rule is violated>",
        file: "Main.java",
        startLine: 2,
        endLine: 4,
        startColumn: 3,
        endColumn: 5,
    }
  }

  core.warning(problem.message, problem.properties);

  console.log(`Hello Aman!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}