import { ETemplateChoice } from './ETemplateChoice';
import { ETSConfigChoice } from './ETSConfigChoice';

export interface IAnswers {
	appDir: string;
	template: ETemplateChoice;
	withAuth?: boolean;
	tscEnv?: ETSConfigChoice;
	initGit?: boolean;
}
