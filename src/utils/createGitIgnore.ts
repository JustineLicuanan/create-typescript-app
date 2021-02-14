import { writeFileSync } from 'fs-extra';

export const createGitIgnore = () => {
	writeFileSync(
		'.gitignore',
		'node_modules/\ncoverage/\n\ndatabase.sqlite*\ndatabase.test.sqlite*\n\nyarn-debug.log*\nyarn-error.log*\n'
	);
};
