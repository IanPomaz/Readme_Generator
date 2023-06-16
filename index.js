var {prompt} = require('inquirer');

  prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },    
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation requirements?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this application?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests are required?'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license does your application have?',
        choices: ['MIT', 'GSD', 'Apache', 'none']
    },
  ]).then((answers) => {
    console.log(answers);
  })