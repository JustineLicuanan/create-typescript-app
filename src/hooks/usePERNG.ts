import { blueBright, bold, cyan, greenBright, red } from 'chalk';
import { removeSync } from 'fs-extra';

import { EConsoleStatus } from '../types/EConsoleStatus';
import { ETemplateRepo } from '../types/ETemplateRepo';
import { IAnswers } from '../types/IAnswers';
import { cloneRepo } from '../utils/cloneRepo';
import { hasGit } from '../utils/hasGit';
import { initGit } from '../utils/initGit';

export const usePERNG = (answers: IAnswers) => {
	if (!hasGit()) {
		console.error(`\n${red(EConsoleStatus.ERROR)} git is not installed`);
		console.info(
			`${blueBright(EConsoleStatus.INFO)} download git at ${bold(
				'https://git-scm.com'
			)} to use ${cyan(answers.template)} template\n`
		);

		process.exit(1);
	}

	const steps = answers.initGit ? 2 : 1;
	console.log();
	cloneRepo(ETemplateRepo.PERNG, answers.appDir);

	process.chdir(answers.appDir);
	removeSync('.git');

	if (answers.initGit) {
		console.log(`[2/${steps}] initializing git repository...\n`);
		initGit();
	}

	console.log(
		`${greenBright(EConsoleStatus.SUCCESS)} cloned ${cyan(
			answers.template
		)} template\n`
	);
};
