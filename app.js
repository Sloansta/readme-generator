const inq = require("inquirer");
const fs = require("fs");

let tableContents = [];
return inq
  .prompt([
    {
      type: "input",
      name: "title",
      message: "Give a title to your README (Required)",
      validate: (titleInput) => {
        if (titleInput) return true;
        else {
          console.log("Please give your README a title");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please give a breif description of your project (Required)",
      validate: (descInput) => {
        if (descInput) return true;
        else {
          console.log("Please give a description of your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Please explain how to install this project (Required)",
      validate: (installInput) => {
        if (installInput) return true;
        else {
          console.log("Please explain how to install this project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Please give usage information for this project (Required)",
      validate: (usageInput) => {
        if (usageInput) return true;
        else {
          console.log("Please enter a usage information");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "What license do you want to give this project?",
      choices: ["GPL-3.0", "LGPL", "MIT", "MPL-2.0", "CDDL-1.0"],
    },
    {
      type: "input",
      name: "contribute",
      message:
        "Please explain the contribution guidelines for this project (Required)",
      validate: (contrib) => {
        if (contrib) return true;
        else {
          console.log("Please explain tghe contribution guidelines");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "test",
      message: "What is this projects test command? (Required)",
      validate: (test) => {
        if (test) return true;
        else {
          console.log("Please input the test command");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "github",
      message: "Please enter your Github username",
    },

    {
      type: "input",
      name: "email",
      message: "Lastly, please provide your email address",
    },
  ])
  .then((data) => {
    const readmeData = `
# ${data.title}

## Description
${data.description}

## License
[![Generic badge]](https://img.shields.io/static/v1.svg?label=<license></license>&message=<${data.license}>&color=<red></red>](https://shields.io/)

## Tabe of Contents
- [License](#license)
- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Test](#test)
- [Contribute](#contribute)
- [Contact](#contact)

## Install 
${data.install}

## Usage
${data.usage}

## Test
${data.test}

## Contribute
${data.contribute}

## Contact
https://www.github.com/${data.github}
${data.email}       
         `;
    console.log(readmeData);

    fs.writeFile("README.md", readmeData, (err) => {
      if (err) throw err;
      else console.log("File has been made");
    });
  });
