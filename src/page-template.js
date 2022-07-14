module.exports = generateReadMe  => {
    console.log(generateReadMe);
    return `
    # Your-Project-Title: ${generateReadMe.name}
   

    ## Description
    ${generateReadMe.info}

    
    ## Table of Contents 
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation
    
    -${generateReadMe.install}
    
    ## Usage
    
    Provide instructions and examples for use. Include screenshots as needed.
    -${generateReadMe.usage}

    
    
    ## Contributors
    
    -${generateReadMe.contributors}
    
    ## License
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    -${generateReadMe.info}
    ---
    
    🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    
    ## Tests
    ${generateReadMe.test}
    `;
};






