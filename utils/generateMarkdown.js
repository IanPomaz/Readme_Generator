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
  return '';
}

//generate the markdown for readme
const genMD = answers => {
  console.log(answers)
  
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

## License

  ${loadSection(answers.licenses)}

## Concerns 

If you have any questions or concerns, you can [email](mailto:${answers.email}) me or contact me at my [github](https://github.com/${answers.github})
  `
  

  // console.log(`https://img.shields.io/badge/license-${answers.licenses}-yellowgreen.svg`)
  console.log(output)
}


module.exports = genMD;

