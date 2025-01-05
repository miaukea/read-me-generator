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
                type: 'input',
                message: 'Who are the contributors of the project?',
                name: 'contributing'
            },
            {
                type: 'input',
                message: 'Please include the test instructions for the project:',
                name: 'test'
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
const writeToFile = ({title, description, instructions, usage, contributing, test}) => {
    `# ${title}

    ## Description
    ${description}

    ## Installation
    ${instructions}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Tests
    ${test}
    `;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
