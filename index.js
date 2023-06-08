const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes.js')
const { writeFile } = require("fs/promises");


const questions = [
	{
		type: 'input',
		message: 'Enter up to 3 characters',
		validate: (text) =>
		text.length <= 3 || 'Must be 3 or less characters',
		name: 'text',
	},
	{
		type: 'input',
		message: 'What color do you want your text to be?',
		name: 'textColor',
	},
	{
		type: 'checkbox',
		message: 'What shape would you like to use?',
		name: 'shape',
		choices: ['Circle','Triangle','Square']
	},
	{
		type: 'input',
		message: 'What color would you like you shape to be?',
		name: 'shapeColor',
	},
]

// function writeToFile(fileName, data) {
// 	fs.writeFile(fileName, generateMarkdown(data), err =>{
// 		if(err) console.log(err)});
// }


function init() {
inquirer.prompt(questions)
.then(({ text, textColor, shape, shapeColor }) => {
	console.log('data received');
	console.log(shape)

	let svg;

	if (shape == 'Circle') {
		svg = new Circle;
		svg.setSVG(text, textColor, shapeColor);
	}
	else if (shape == 'Triangle') {
		svg = new Triangle;
		svg.setSVG(text, textColor, shapeColor);
	}
	else {
		svg = new Square;
		svg.setSVG(text, textColor, shapeColor);
	}

	return writeFile('generatedLogo.svg', svg.render());
})
.then(() => {
	console.log('Logo generated.')
})
};


init();