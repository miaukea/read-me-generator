// TODO: Include packages needed for this application
import inquirer from 'inquirier';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt ([
            {
                type: 'input',
                message: 'What is the project title?',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Please write a brief description for the project:',
                name: 'description'
            },
            {
                type: 'input',
                message: 'Please write installation instructions for the project:',
                name: 'instructions'
            },
            {
                type: 'input',
                message: 'How would you like the project to be used?',
                name: 'usage'
            },
            {
                type: 'list',
                message: 'Which license will you be using for your project?',
                name: 'license',
                choices: ['Apache License 2.0', 'Eclipse Public License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Mozilla Public License 2.0', 'Proprietary License', 'The Unlicense']
            },
            {
                type: 'input',
                message: 'Who are the contributors of the project?',
                name: 'contributing'
            },
            {
                type: 'input',
                message: 'Please include the test instructions for the project:',
                name: 'test'
            },
            {
                type: 'input',
                message: 'What is your GitHub name?',
                name: 'github'
            },
            {
                type: 'input',
                message: 'What is your email?',
                name: 'email'
            }
        ]).then((response) => {
            const readmeContent = writeToFile(response);

            fs.appendFile('README.md', readmeContent, (err) => {
                if (err) throw err;
                console.log('Your READ-ME was successfully made');
            })
        })
];

// TODO: Create a function to write README file
const writeToFile = ({title, description, instructions, usage, license, contributing, test, github, email}) => {
    `# ${title}

    ## Description
    ${description}

    ## Table of Contents
    - [Installation]()
    - [Usage]()
    - [License]()
    - [Contributing]()
    - [Tests]()
    - [Questions]()

    ## Installation
    ${instructions}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${test}

    ## Questions
    https://github.com/${github}

    If you have any questions about the following repository, please feel free to reach me at ${email}
    `;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
