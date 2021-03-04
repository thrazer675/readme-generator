function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}

  ## Description of project
  ${data.description}

  ## Table of Contents

  ["Installation"](#installation)
  ["License"](#license)
  ["Contributing"](#contributing)
  ["Tests"](#tests)
  ["Questions"](#questions)

  ## Installation
  You can install the necessary packages with: ${data.installation}
  ## Licensing
  This project is under the ${data.license}
  ## Contributing
  Thanks to ${data.contributing}.
  ## Tests
  Run tests in the command line with: ${data.test}.
  ## Questions
  You can ask me questions at ${data.email} or find me here on Github: https://github.com/${data.Github}
`;
}

module.exports = generateMarkdown;