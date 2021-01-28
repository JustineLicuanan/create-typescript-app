import { Options, Template } from '../types/OptionTypes';

type TemplateSrcDir = (options: Options) => string;

const templateSrcDir: TemplateSrcDir = ({
	simple,
	template = Template.GRAPHQL,
}) => {
	if (template === Template.GRAPHQL || template === Template.EXPRESS) {
		return simple ? 'simple-template' : 'auth-template';
	}

	if (template === Template.TSC) {
		return `tsconfig.${simple ? 'react' : 'node'}.json`;
	}

	process.exit(1);
};

export default templateSrcDir;
