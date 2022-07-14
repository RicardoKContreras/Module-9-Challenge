const generateReadMe = (userName) => {
    return `# <Your-Project-Title>

    ## Description
    
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
    - What was your motivation?: ${userName}
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?: 
    - What did you learn?
    
    ## Table of Contents (Optional)
    
    
    Name: ${userName}
    
    `;
};





module.exports = generateReadMe;
