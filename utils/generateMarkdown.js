// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  const newLicense = license.split(' ').join('%20');
  return `![License](https://img.shields.io/badge/license-${newLicense}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  const licenseLinks = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'Apache License 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GNU General Public License v3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'Mozilla Public License 2.0': 'https://www.mozilla.org/en-US/MPL/2.0/',
    'Eclipse Public License 2.0': 'https://www.eclipse.org/legal/epl-2.0/',
    'The Unlicense': 'https://unlicense.org/'
  };
  return `[${license} License](${licenseLinks[license] || ''})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  return `## License

This project is licensed under the **${renderLicenseBadge(license)}**.  
For more details, see: ${renderLicenseLink(license)}`;
}

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

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  https://github.com/${data.github}

  If you have any questions about the following repository, please feel free to reach me at [${data.email}](mailto:${data.email})
  `;
}