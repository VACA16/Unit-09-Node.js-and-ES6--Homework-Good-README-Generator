const fs = require("fs");
const util = require("util");
const api = require("./api");
const inquirer = require('inquirer');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./generateMarkdown");

function promptUser() {
    return inquirer.prompt([{
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'project'
        },
        {
            type: 'input',
            message: 'Please write a short discription of your project:',
            name: 'discription'
        },
        {
            type: 'checkbox',
            message: 'What kinda of license should your project have?',
            name: 'license',
            choices: [
                "MIT",
                "APACHE2.0",
                "GPL3.0",
                "BSD3",
                'None'
            ]
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'dependencies'
        },
        {
            type: 'input',
            message: 'What command should be run to run test?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'know'
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'repo'
        }

    ])
}

promptUser()
    .then(function(data) {
        const username = data.username;
        api.getUser(username).then(function(getUserResponse) {
            const markDown = generateMarkdown(data, getUserResponse);
            return writeFileAsync("READMEDemo.MD", markDown);
        })
    })

.then(function() {
        console.log("Successfully wrote to README.MD");
    })
    .catch(function(err) {
        console.log(err);
    });