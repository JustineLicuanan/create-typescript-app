import { bold, red } from 'chalk';
import clear from 'clear';
import { prompt } from 'inquirer';

import { questions } from './questions';
import { EConsoleStatus } from './types/EConsoleStatus';
import { handleAnswers } from './utils/handleAnswers';
const pkg = require('../package.json');

(async () => {
	try {
		clear();

		console.log(`\n${bold(`${pkg.name} | ${pkg.description}`)}\n`);
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

		console.error(err);
		process.exit(1);
	}
})();
