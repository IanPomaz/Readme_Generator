//array of questions for input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your first and last name?'
    }, 
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
        choices: ['MIT', 'Boost1.0', 'Apache2.0', 'MPL2.0', 'BSD2', 'BSD3', 'none']
    }
  ];

  module.exports = questions;
