import { cyan, green } from 'chalk';
import { copySync } from 'fs-extra';
import { join } from 'path';

import { IAnswers } from '../types/IAnswers';
import { getTSConfigFileName } from '../utils/getTSConfigFileName';

export const useTSConfig = (answers: IAnswers) => {
	const steps = 1;
	const appDir = `${answers.appDir}/tsconfig.json`;
	const tsconfig = getTSConfigFileName(answers.tscEnv!);

	console.log(`\n[1/${steps}] cloning into '${appDir}'...\n`);
	copySync(join(__dirname, `../../public/tsc/${tsconfig}`), appDir);

	console.log(
		`${green('success')} cloned ${cyan(answers.template)} template\n`
	);
};
