import { ETSConfigChoice, ETSConfigFileName } from '../types/ETSConfigChoice';

export const getTSConfigFileName = (tscEnv: ETSConfigChoice) => {
	switch (tscEnv) {
		case ETSConfigChoice.NODE:
			return ETSConfigFileName.NODE;

		case ETSConfigChoice.NEXT_JS:
			return ETSConfigFileName.NEXT_JS;

		case ETSConfigChoice.REACT:
			return ETSConfigFileName.REACT;

		default:
			throw new Error();
	}
};
