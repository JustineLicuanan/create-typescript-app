import { execSync } from 'child_process';

export const cloneRepo = (repo: string, dest: string) => {
	execSync(`git clone ${repo} ${dest}`, { stdio: [0, 1, 2] });
	console.log();
};
