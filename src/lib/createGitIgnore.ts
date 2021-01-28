import { writeFileSync } from 'fs-extra';

import { Options, Template } from '../types/OptionTypes';

type CreateGitIgnore = (options: Options) => void;

const createGitIgnore: CreateGitIgnore = ({ template }) => {
	if (template === Template.GRAPHQL || template === Template.EXPRESS) {
		writeFileSync(
			'.gitignore',
			'node_modules/\ndist/\ndatabase.sqlite*\n.env\n'
		);
	}
};

export default createGitIgnore;
