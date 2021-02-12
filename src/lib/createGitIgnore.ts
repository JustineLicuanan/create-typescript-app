import { writeFileSync } from 'fs-extra';

import { Options, Template } from '../types/OptionTypes';

type CreateGitIgnore = (options: Options) => void;

const createGitIgnore: CreateGitIgnore = ({ template }) => {
	if (
		template === Template.GRAPHQL ||
		template === Template.EXPRESS ||
		template === Template.PERNG
	) {
		writeFileSync(
			'.gitignore',
			'node_modules/\ncoverage/\n\ndatabase.sqlite*\ndatabase.test.sqlite*\n\nyarn-debug.log*\nyarn-error.log*\n'
		);
	}
};

export default createGitIgnore;
