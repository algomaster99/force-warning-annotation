const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file

  problem = {
    message: 'Problem 1',
    level: 'warning',
    properties: {
        title: "<rule is violated>",
        file: "Main.java",
        startLine: 1,
        endLine: 2,
        startColumn: undefined,
        endColumn: undefined,
    }
  }

  problem2 = {
    message: 'Problem 2',
    level: 'warning',
    properties: {
        title: "<rule is violated>",
        file: "Main.java",
        startLine: 1,
        endLine: 3,
        startColumn: undefined,
        endColumn: undefined,
    }
  }

  core.warning(problem.message, problem.properties);
  core.warning(problem2.message, problem2.properties)

  console.log(`Hello Aman!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}