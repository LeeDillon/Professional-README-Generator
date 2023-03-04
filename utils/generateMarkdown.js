// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description: ${data.description}



### Table of Contents:

 - [Installation](#installation)

 - [Usage](#usage)

 - [Contributing](#contributing)

 - [Tests](#tests)

 - [License](#license)

 - [Questions](#questions)

# Installation
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contributing}

# Tests
${data.tests}

# License
${data.license}

# Questions

* The URL of my GitHub account: ${data.github}

* My Email address: ${data.email}

* How to get in touch: ${data.contact}
`;
}

module.exports = generateMarkdown;
