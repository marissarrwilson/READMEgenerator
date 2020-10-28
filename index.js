const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

// prompts for user
function promptUser() {
 return inquirer.prompt([
        { //title
            name: "title", 
            type: "input",
            message: "What is the title of this repository?"
        },
        { //description
            name: "description",
            type: "input",
            message: "What is the description of this project?"
        },
        { //installation
            name: "installation",
            type: "input",
            message: "How is this application installed?"
        },
        { //usage
            name: "usage",
            type: "input",
            message: "How should this project used?"
        },
        { //screenshots
            name: "screenshots",
            type: "input",
            message: "Enter the url of the screenshot you would like to input"
        },
        { //tests
            name: "tests",
            type: "input",
            message: "How can others run a test of your application?"
        },
        { //credits
            name: "credits",
            type: "input",
            message: "Who are the creator(s) of this project?"
        },
        { //questions
            name: "questions",
            type: "input",
            message: "Where can you be reached about questions regarding this project (email)?"
        },
        { //Github
            name: "github", 
            type: "input",
            message: "What is your Github username?"
        },
        { //license
            name: "license",
            type: "input",
            message: "Please paste your license below",
        }
    ]);
}

// const READMEfile = 
function generateMarkdown(response){
    return `
# ${response.title}

## Table of contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Screenshots
${response.screenshots}

## Tests
${response.tests}

## Credits
${response.credits}

## Questions
For any questions regarding this project, I can be reached at ${response.questions}.

For additional information, please visit my GitHub profile here:
[GitHub](https://github.com/${response.github})

## License
${response.license}

`}

// function to initialize program, callback
async function init() {
    console.log('Welcome to the README generator!')
    try {
    const response = await promptUser();
    const readMe = generateMarkdown(response);
    await writeFile("README.md", readMe); console.log("Your readme file is complete!");
    } catch (error) {
        console.log(error);
    }
}

// function call to initialize program
init();
