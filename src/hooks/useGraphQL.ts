import { blueBright, cyan, greenBright, yellowBright } from 'chalk';
import { copySync } from 'fs-extra';
import { join } from 'path';

import { EConsoleStatus } from '../types/EConsoleStatus';
import { ETemplateType } from '../types/ETemplateType';
import { IAnswers } from '../types/IAnswers';
import { createGitIgnore } from '../utils/createGitIgnore';
import { hasGit } from '../utils/hasGit';
import { initGit } from '../utils/initGit';

export const useGraphQL = (answers: IAnswers) => {
	const hasGit_cache = hasGit();
	const steps = answers.initGit && hasGit_cache ? 2 : 1;

	console.log(`\n[1/${steps}] cloning into '${answers.appDir}'...\n`);
	copySync(
		join(
			__dirname,
			`../../public/graphql/${
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
};
