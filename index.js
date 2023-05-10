const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  { type: "input", name: "title", message: "Enter the title of your project" },
  {
    type: "list",
    name: "license",
    message: "Select a license",
    choices: [
      "Apache 2.0 License",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "MIT License"
    ],
  },
  { 
    type: "input", 
    name: "description", 
    message: "Please write a description of your project"
  },

    {   
type: "input", name: "installInfo", message: "Please fill in the installation instructions for your project"


    },
    
    {
        type: "input", name: "usageInfo", message: "Please fill in the usage information"
    },

    

    {
        type: "input", name: "testingInfo", message: "Please describe your testing process"
    },

    
    {
        type: "input", name: "contributorsInfo", message: "Please list all contributors"
    },
    
    {
        type: "input", name: "eMail", message: "Please enter the email addresses of your contributors"
    
    },

    {
        type: "input", name: "gitHub", message: "Please list the gitHub accounts of the contributors"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, "/Samples/",fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((answers) => {
   writeToFile("README.md",generateMarkdown (answers))
  });
}

// Function call to initialize app
init();
