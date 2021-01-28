import { green } from 'chalk';
import { execSync } from 'child_process';

import { Options, Template } from '../types/OptionTypes';
const pkg = require('../../package.json');

type InitGitRepo = (options: Options) => void;

const isGitInstalled = () => {
	try {
		execSync('git --version', { stdio: 'ignore' });
		return true;
	} catch (err) {
		return false;
	}
};

const initGitRepo: InitGitRepo = ({ template }) => {
	if (
		(template === Template.GRAPHQL || template === Template.EXPRESS) &&
		isGitInstalled()
	) {
		console.log(`${green('Initializing Git repository...')}\n`);

		execSync(
			`git init && git add . && git commit -m "Initialize project with ${pkg.name}"`,
			{ stdio: 'ignore' }
		);
	}
};

export default initGitRepo;
