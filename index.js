var inquirer = require('inquirer');

inquirer.prompt([{
        type: 'input',
        message: 'What is your github username?',
        username: 'username'
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Please write a short discription of your project:',
        discription: 'discription'
    },
    {
        type: 'input',
        message: 'What kinda of license should your project have?',
        license: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        dependencies: 'dependencies'
    },
    {
        type: 'input',
        message: 'What command should be run to run test?',
        test: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        know: 'know'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        repo: 'repo'
    },
]);