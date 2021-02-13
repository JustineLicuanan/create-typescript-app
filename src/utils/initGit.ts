import { execSync } from 'child_process';

const pkg = require('../../package.json');

export const initGit = () => {
	execSync('git init', { stdio: 'ignore' });
	execSync('git add .', { stdio: 'ignore' });
	execSync(`git commit -m "Initialize project using ${pkg.name}"`, {
		stdio: 'ignore',
	});
};
