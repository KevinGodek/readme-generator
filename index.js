const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');
//const { error } = require('console');

const writeFileAsync = util.promisify(fs.writeFile)