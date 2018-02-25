const assert = require("assert");
const testFiles = ["./module.js"];

for (file of testFiles) {
  const tests = require(file).Tests(assert);
  for (test of tests) {
    let numberOfSucceededTests = 0;
    let numberOfFailedTests = 0;
    const failedTest = [];
    try {
      test.function();
      ++numberOfSucceededTests;
    } catch (error) {
      ++numberOfFailedTests;
      const failure = {
        test: test.name,
        error
      };
      failedTest.push(failure);
    }
    const endMessage = `
    Succeeded: ${numberOfSucceededTests}.
    Failed: ${numberOfFailedTests}:
          ${failedTest.map(failure => {
            return `${failure.test} failed with: 
                    ${failure.error}`;
          })}
    `;
    console.log(endMessage);
  }
}
