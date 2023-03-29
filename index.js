const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file

  core.warning({
    message: 'This is a warning',
    level: 'warning',
    properties: {
        title: "<rule is violated>",
        file: "<file name>",
        startLine: 3,
        endLine: 4,
        startColumn: undefined,
        endColumn: undefined,
  });

  console.log(`Hello Aman!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}