import { QuestionCollection } from 'inquirer';

import { ETemplateChoice } from './types/ETemplateChoice';
import { ETSConfigChoice } from './types/ETSConfigChoice';
import { IAnswers } from './types/IAnswers';

export const questions: QuestionCollection<IAnswers> = [
	{
		type: 'input',
		name: 'appDir',
		message: 'App directory?',
		default: '.',
	},
	{
		type: 'list',
		name: 'template',
		message: 'What template do you want?',
		choices: Object.values(ETemplateChoice),
		default: ETemplateChoice.PERNG,
	},
	{
		type: 'confirm',
		name: 'withAuth',
		message: 'Use with-auth template?',
		default: true,
		when: (answers) => {
			return (
				answers.template !== ETemplateChoice.TSCONFIG &&
				answers.template !== ETemplateChoice.PERNG
			);
		},
	},
	{
		type: 'list',
		name: 'tscEnv',
		message: 'What TSConfig do you want?',
		choices: Object.values(ETSConfigChoice),
		default: ETSConfigChoice.NODE,
		when: (answers) => {
			return answers.template === ETemplateChoice.TSCONFIG;
		},
	},
	{
		type: 'confirm',
		name: 'initGit',
		message: 'Initialize git repo?',
		default: true,
		when: (answers) => {
			return answers.template !== ETemplateChoice.TSCONFIG;
		},
	},
];
