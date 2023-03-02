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
    // {
    //     type: 'input',
    //     message: 'Where do you live?',
    //     name: 'location',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your LinkedIn URL?',
    //     name: 'linkedin',
    // },
    // {
    //     type: 'input',
    //     message: 'What is your GitHub URL?',
    //     name: 'github',
    // },
    // {
    //     type: 'input',
    //     message: 'Tell me about yourself?',
    //     name: 'bio',
    // },
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
    inquirer.prompt(questions).then((answers) => writeToFile('example/README.md', generateMarkdown(answers)));
}

// function call to initialize program
init();
