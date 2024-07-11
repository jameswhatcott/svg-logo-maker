const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    "Text (3 Characters Max)",
    "Text Color",
    "Shape",
    "Shape's Color"
     ];








function init() {
  
  inquirer
  .prompt([
    {
      type: "input",
      message: `${questions[0]}`,
      name: "text",
    },
    {
        type: "input",
        message: `${questions[1]}`,
        name: "text color"
    },
    {
        type: "list",
        message: `${questions[2]}`,
        name: "shape"
    },
    {
        type: "input",
        message: `${questions[3]}`,
        name: "shape color"
    }
    
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile('logo.svg', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Success!')
    
  )});

}






init();




  