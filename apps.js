const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
       {
        type: 'input',
        name: 'name',
        message:'What is your name?'
       } 
    ]);
};
questions();