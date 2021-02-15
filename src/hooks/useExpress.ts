import { blueBright, bold, cyan, greenBright, red, yellowBright } from 'chalk';
import { copySync, removeSync } from 'fs-extra';
import { join } from 'path';

import { EConsoleStatus } from '../types/EConsoleStatus';
import { ETemplateRepo } from '../types/ETemplateRepo';
import { ETemplateType } from '../types/ETemplateType';
import { IAnswers } from '../types/IAnswers';
import { cloneRepo } from '../utils/cloneRepo';
import { createGitIgnore } from '../utils/createGitIgnore';
import { hasGit } from '../utils/hasGit';
import { initGit } from '../utils/initGit';

export const useExpress = (answers: IAnswers) => {
	const hasGit_cache = hasGit();
	const steps = answers.initGit && hasGit_cache ? 2 : 1;

	if (!answers.withAuth) {
		console.log(`\n[1/${steps}] cloning into '${answers.appDir}'...\n`);
		copySync(
			join(
				__dirname,
				`../../public/express/${
					answers.withAuth ? ETemplateType.WITH_AUTH : ETemplateType.SIMPLE
				}`
			),
			answers.appDir
		);

		process.chdir(answers.appDir);
		createGitIgnore();

		if (answers.initGit) {
			if (!hasGit_cache) {
				console.warn(
					`${yellowBright(EConsoleStatus.WARNING)} git is not installed`
				);
				console.info(
					`${blueBright(EConsoleStatus.INFO)} git repo initialization failed\n`
				);
			} else {
				console.log(`[2/${steps}] initializing git repository...\n`);
				initGit();
			}
		}

		console.log(
			`${greenBright(EConsoleStatus.SUCCESS)} cloned ${cyan(
				answers.template
			)} template\n`
		);

		return;
	}

	// with auth
	if (!hasGit_cache) {
		console.error(`\n${red(EConsoleStatus.ERROR)} git is not installed`);
		console.info(
			`${blueBright(EConsoleStatus.INFO)} download git at ${bold(
				'https://git-scm.com'
			)} to use ${cyan(answers.template)} template\n`
		);

		process.exit(1);
	}

	console.log();
	cloneRepo(ETemplateRepo.EXPRESS, answers.appDir);

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
