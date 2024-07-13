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
      validate: function (input) {
        if (input.length > 3) {
          return "Text must be 3 characters or less.";
        }
        return true;
      }
    },
    {
        type: "input",
        message: `${questions[1]}`,
        name: "textColor"
    },
    {
        type: "list",
        message: `${questions[2]}`,
        name: "shape",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        message: `${questions[3]}`,
        name: "shapeColor"
    }
    
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile('logo.svg', generateLogo(response), (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
    
  )});

}

function generateLogo(response) {
  const { text, textColor, shape, shapeColor } = response;
  
  let shapeElement;
  
  switch (shape) {
    case 'Circle':
      shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      break;
    case 'Square':
      shapeElement = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
      break;
    case 'Triangle':
      shapeElement = `<polygon points="150,20 280,180 20,180" fill="${shapeColor}" />`;
      break;
    default:
      shapeElement = '';
  }
  
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
  ${shapeElement}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
  `;
}

init();



module.exports = generateLogo;
