

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
    writeToFile('./README-holder/README.md', markdown)
    })


}

// Function call to initialize app
init();
