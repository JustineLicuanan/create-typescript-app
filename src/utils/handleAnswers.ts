import { useExpress } from '../hooks/useExpress';
import { useGraphQL } from '../hooks/useGraphQL';
import { usePERNG } from '../hooks/usePERNG';
import { useTSConfig } from '../hooks/useTSConfig';
import { ETemplateChoice } from '../types/ETemplateChoice';
import { IAnswers } from '../types/IAnswers';

export const handleAnswers = (answers: IAnswers) => {
	switch (answers.template) {
		case ETemplateChoice.PERNG:
			usePERNG(answers);
			break;

		case ETemplateChoice.GRAPHQL:
			useGraphQL(answers);
			break;

		case ETemplateChoice.EXPRESS:
			useExpress(answers);
			break;

		case ETemplateChoice.TSCONFIG:
			useTSConfig(answers);
			break;

		default:
			throw new Error();
	}
};
