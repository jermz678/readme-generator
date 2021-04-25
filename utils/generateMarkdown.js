// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if( license === 'none'){
    return '';
  }
  else{
    return `![license](https://img.shields.io/badge/License-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license === 'none'){
    return '';
  }
  else{
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if( license === 'none'){
    return '';
  }
  else{
    return `
    ## License

    license : ${license}`
  }
}
//sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  

module.exports = generateMarkdown;
