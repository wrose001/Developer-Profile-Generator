const inquirer = require("inquirer");

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
        message: ["ISC", "MIT", "BSD"]
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

}

function init() {

    inquirer.prompt(questions).then(function(answers){
        console.log(answers);
        const { github_username, } = answers;
        console.log(github_username);
    })

}