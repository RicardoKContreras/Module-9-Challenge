const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const inquirer = require('inquirer');
const writeFile = require('./potential-enigma/Develop/utils/generate-site.js');
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}






const questions = () => {
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

const generatePage2 = (userName) => {
    return `# <Your-Project-Title>

    ## Description
    
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    - What was your motivation?:
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?: 
    - What did you learn?
    
    ## Table of Contents (Optional)
    
    
    Name: ${userName}`;
} 
console.log(generatePage2(name));


questions();


/*fs.writeFile('README.md',questions(), err => {
    if (err) {
        console.log(err);
        return;
    }
});


console.log(generatePage());
*/