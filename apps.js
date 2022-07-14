const inquirer = require('inquirer');
/*const fs = require('fs');
const generateReadMe = require('./src/page-template.js');
const pageREADME = generateReadMe(Name);

const writeFile = require('./potential-enigma/Develop/utils/generate-site.js');
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


//questions();


fs.writeFile('README.md', pageREADME(Name), err => {
    if (err) throw err;

    console.log('Readme file complete!')
    //console.log(generateReadMe(name));
        
    
});
*/
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the title of your project?'
    }
  ])
  .then(answers => console.log(answers));

/*const questions = () => {
    return inquirer.prompt ([
       {
        type: 'input',
        name: 'name',
        message:'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log('Please enter your name!');
                return false;
            }
          }
       } 
    ]);
};
*/




