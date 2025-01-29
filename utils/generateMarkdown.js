// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  https://github.com/${data.github}

  If you have any questions about the following repository, please feel free to reach me at [${data.email}](mailto:${data.email})
  `;
}