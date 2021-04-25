// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( !license || license === 'none' ){
    return '';
  }
  else{
    return `![license](https://img.shields.io/badge/License-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( !license || license === 'none'){
    return '';
  }
  else{
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( !license || license === 'none'){
    return '';
  }
  else{
    return `## License

    license : ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data['Project-title']}

  ## Description 

    ${data.Description}

  ${renderLicenseBadge(data.License[0])}

  ## Table of Contents
  * [Installation](#Installation)
  ${renderLicenseLink(data.License[0])}
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Test)
  * [Questions](#Questions)
  
  ## Installation

  ${data.Installation}

  ${renderLicenseSection(data.License[0])}

  ## Usage

  ${data.Usage}

  ## Contributing

  ${data.Contribution}

  ## Tests

  ${data.Test}
  
  ## Questions

  [Github](https://github.com/${data.Github})

  Send your questions here

  ${data.Email}
  
`;
}

module.exports = generateMarkdown;
