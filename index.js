// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, 
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled
// License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'Project-title',
        message: 'What is the Title of your Project? (required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of your project.'
    },
    {
        type: 'input',
        name: 'Installation',
     message: 'Provide installation instructions for your project'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Tell us how to use your project'
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'Tell us how to contribute to your project'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Tell us how to test your project'
    },
    {
        type: 'checkbox',
        name: 'License',
        message: 'Choose a license',
        choices: ['Mit', 'Apache', 'GPLv3', 'none'],
        
    },
    {
        type: 'input',
        name: 'Github',
        message: 'Enter your github username (required)' ,
        validate: (githubInput) => {
            if (githubInput) {
            return true;
            }
            else {
            console.log('')
            return false
            }
        }
    },
    {
        type: 'input', 
        name: 'Email',
        message: 'what is your email address? (required)',
        validate: (emailInput) => {
            if (emailInput) {
            return true;
            }
            else {
            console.log('')
            return false
            }
        }

    },
    
];
console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(readmeData => {
    let markdown = generateMarkdown(readmeData);
    writeToFile('README.md', markdown)
    })


}

// Function call to initialize app
init();
