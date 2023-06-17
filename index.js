const { prompt } = require('inquirer');
const { questions, genMD } = require('./utils');

  prompt(questions).then(genMD);

  //This application creates a readme file based on user input. 

  //Open the index.js file in the terminal. Type in the terminal: "node index.js". Follow the prompts and answer any corresponding information. The new README.md file will appear in the "your.new.readme" folder.