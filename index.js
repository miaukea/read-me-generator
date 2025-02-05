// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import { generateMarkdown } from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
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
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Eclipse Public License 2.0', 'The Unlicense']
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
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
const writeToFile = (filename, data) => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('README file has been generated successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((response) => {
        const readmeContent = generateMarkdown(response);
        writeToFile('README.md', readmeContent);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();