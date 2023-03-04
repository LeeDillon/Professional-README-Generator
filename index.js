const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the Description?',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage guidelines',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines on how people can contribute',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide guidelines on testing',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the best way for someone to get in touch with you?',
        name: 'contact',
    },
    {
        type: 'list',
        message: 'Please select a license',
        name: 'license',
        choices: [{ name: 'MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },
            { name: 'Apache', value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' },
            { name: 'GNU GPL v2', value: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)' },
            { name: 'GNU GPL v3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)' },
            { name: 'IBM', value: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)' }]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// promptUser()
//     .then((answers) => writeFileAsync('index.html', generateMarkdown(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => writeToFile('output/README.md', generateMarkdown(answers)));
}

// function call to initialize program
init();
