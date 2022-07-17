# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)


AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project


GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

-Created a function that generates `inquire.prompt`
-Created questions to ask to generate the `README file`
-Used the `fs.WriteFile` to generate the `README file`
-Connected another `javascript file` to hold the `README file template`
-Used the `require` syntax to incorporate the answers given from the prompts to be used in the `README file` when generated
-All answers/information is included in the `README file` with appropriate answers
-A table contents was created to guide through sections of the `README file`

Screencastify link: https://drive.google.com/file/d/1L_LWHTO15yuX3MZdizn2-aNWvm6X9Z6V/view

