const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/page-template.js');

const init = () => {
  return  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please provide a title for your project!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'info',
        message: 'Provide a brief description about your project.',
        validate: infoInput => {
            if (infoInput) {
                return true;
            }
            else {
                console.log('Please give a description for your project!');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirminstallinstructions',
        message: 'Would you like to enter some installation instructions?',
        default:true
      },
      {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions.',
        when: ({confirminstallinstructions}) => {
            if (confirminstallinstructions) {
                return true;
            }
            else {
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors to the project?',
        validate: contributorInput => {
            if (contributorInput) {
                return true;
            }
            else {
                console.log('Please include any/all contributors to the project');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmtestinstructions',
        message: 'Would you like to enter some test instructions?',
        default:true
      },
     
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions.',
        when: ({confirmtestinstructions}) => {
            if (confirmtestinstructions) {
                return true;
            }
            else {
                return false;
            }
        }
      },
      
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for the usage of your project',
        validate: exampleInput => {
            if (exampleInput) {
                return true;
            }
            else {
                console.log('Please leave instructions and a screenshot example for the usage of the project');
                return false;
            }
        }
      }
    ]);
};



const promptReadMe = () => {
    console.log(`
    ============ 
    Adding ReadMe specific questions
    `);
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to display?',
            choices: ['MIT', 'Mozilla', 'Apache']
        },
        {
            type: 'input',
            name: 'githubUserName',
            message: 'What is your Github Username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please type your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email address',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('Please type your email address');
                    return false;
                }
            }
        }
    ]);
};

init()
.then(init => {
    const pageREADME = generateReadMe(init, promptReadMe);

//const writeFile = require('./potential-enigma/Develop/utils/generate-site.js');
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


//questions();


fs.writeFile('README.md', pageREADME, err => {
    if (err) throw err;

    console.log('Readme file complete!')
    //console.log(generateReadMe(name));
        
    
});
})
.then(ReadMeAnswers => console.log(ReadMeAnswers));





