import { green } from 'chalk';
import { copySync } from 'fs-extra';
import { join } from 'path';

import { Options, Template } from '../types/OptionTypes';
import createGitIgnore from './createGitIgnore';
import templateSrcDir from './templateSrcDir';

type CopyTemplate = (appDir: string, options: Options) => void;

const copyTemplate: CopyTemplate = (appDir, options) => {
	const templateSrc = templateSrcDir(options);
	const appDest =
		options.template === Template.TSC ? `${appDir}/tsconfig.json` : appDir;

	console.log(
		`${green(
			`Copying \`${options.template} ${templateSrc}\` to \`${appDest}\`...`
		)}\n`
	);

	copySync(
		join(__dirname, `../../public/${options.template}`, templateSrc),
		appDest
	);

	process.chdir(join(process.cwd(), appDir));
	createGitIgnore(options);
};

export default copyTemplate;
