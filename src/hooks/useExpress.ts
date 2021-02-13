import { IAnswers } from '../types/IAnswers';

export const useExpress = (answers: IAnswers) => {
	console.log(JSON.stringify(answers, null, 2));
};
