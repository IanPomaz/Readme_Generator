//load license badge
const loadBadge = licenses => {
  if (licenses !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${licenses}-yellowgreen.svg)`;
  }
  return '';
}

// returns the license section
const loadSection = licenses => {
  if (licenses !== 'none') {
    return `## License
    
        Licensed under the ${licenses} license.` //answers not defined
  }
  return 'N/A';
}

//generate the markdown for readme
const genMD = answers => {
  // console.log(answers)
  
  let output = `
  # ${answers.title} by ${answers.name}
  # ${loadBadge(answers.licenses)}


## Description
  ${answers.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## Credits
  ${answers.contributions}

## Tests
  ${answers.test}

${loadSection(answers.licenses)}

## Concerns 

If you have any questions or concerns, you can [email](mailto:${answers.email}) me or contact me at my [github](https://github.com/${answers.github})
  `

  //Creates new markdown file and puts it into the your.new.readme folder.
const fs = require('fs');

  fs.writeFile('your.new.readme/README.md', output, function (file) {
    console.log('Created your professional README.md file!')
  })

  // console.log(output)
}


module.exports = genMD;


