import { execSync } from 'child_process';

export const hasGit = () => {
	try {
		execSync('git --version', { stdio: 'ignore' });
		return true;
	} catch (err) {
		return false;
	}
};
