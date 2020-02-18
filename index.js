const inquirer = require("inquirer");

const axios = require("axios");

const fs = require("fs");

// node = process.argv[0];
// script.js = process.argv[1];
// let github_username = process.argv[2];

// axios.get(`https://api.github.com/users/${github_username}`).then(resp => {
//     console.log(resp);
// })

const questions = [

    {
        type: "input",
        name: "github_username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "project_name",
        message: "What is your project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project." 
    },
    {
        type: "list",
        name: "licenses",
        choices: ["ISC", "MIT", "BSD"],
        message: "What license are you using?"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What command should be run to install dependencies?" 
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?" 
    },
    {
        type: "input",
        name: "usingRepo",
        message: "What does the user need to know about using the repo?" 
    },
    {
        type: "input",
        name: "contributingRepo",
        message: "What does the user need to know about contributing to the repo?" 
    },

];

function writeToFile(fileName, data) {
    let fileContents = 
    `# ${data.project_name}
    ## Description
    ​
    ${data.description}
    ​
    ## Table of Contents 
    ​
    * [Installation](#installation)
    ​
    * [Usage](#usage)
    ​
    * [License](#license)
    ​
    * [Contributing](#contributing)
    ​
    * [Tests](#tests)
    ​
    * [Questions](#questions)
    ​
    ## Installation
    ​
    To install necessary dependencies, run the following command:
    ​

    ${data.dependencies}

    ​
    ## Usage
    ​
    ${data.usingRepo}
    ​
    ## License
    ​
    This project is licensed under the ${data.licenses} license.
      
    ## Contributing
    ​
    ${data.contributingRepo}
    ​
    ## Tests
    ​
    To run tests, run the following command:
    ​

    ${data.tests}

    ​
    ## Questions
    ​
    <img src=${data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />
    ​
    If you have any questions about the repo, open an issue or contact [${data.github_username}](https://api.github.com/users/${data.login}).
    
    `
    fs.writeFile(fileName, fileContents, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
      });
}

function init() {

    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        const user = answers;
        axios.get(`https://api.github.com/users/${user.github_username}`).then(resp => {
    user.avatar_url = resp.data.avatar_url;
    writeToFile("output/README.md", user);

})
        // const { github_username, } = answers;
        
    });

}

init();



// [![GitHub license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)](https://github.com/${data.github_username}/${data.project_name})