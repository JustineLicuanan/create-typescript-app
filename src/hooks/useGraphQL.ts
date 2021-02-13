import { IAnswers } from '../types/IAnswers';

export const useGraphQL = (answers: IAnswers) => {
	console.log(JSON.stringify(answers, null, 2));
};
