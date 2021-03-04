// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generatedMarkdown = require("./develop/utils/generateMarkdown")

// function to start program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response){
        const filename = "README.md";
        const generatedREADME =  generatedMarkdown(response)
        fs.writeFileSync(filename, generatedMarkdown(response), function(err){
            if (err) {
                return console.log(err);
            }

            console.log("README.md generated!")
        });
    });
}

// questions to be answered via command line
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install required packages?",
        default: "npm install"
    },
    {
        type: "input",
        name: "usage",
        message: "Give the user some info regarding using this repo",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command runs tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "Github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
];

// call to start program
init()