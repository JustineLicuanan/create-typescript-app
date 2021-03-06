#!/usr/bin/env node
import { bold, greenBright, red, redBright } from 'chalk';
import clear from 'clear';
import { prompt } from 'inquirer';

import { questions } from './questions';
import { EConsoleStatus } from './types/EConsoleStatus';
import { handleAnswers } from './utils/handleAnswers';
const pkg = require('../package.json');

(async () => {
	try {
		clear();

		console.log(`\n${greenBright(pkg.name)} | ${pkg.description}\n`);
		console.log(
			`Made w/ ${redBright('<3')} by ${greenBright(pkg.author)} | ${bold(
				'https://github.com/JustineLicuanan'
			)}\n`
		);

		const answers = await prompt(questions);
		handleAnswers(answers);
	} catch (err) {
		if (err.isTtyError) {
			console.error(
				`\n${red(
					EConsoleStatus.ERROR
				)} couldn't render in current environment\n`
			);

			process.exit(1);
		}

		throw err;
	}
})();
