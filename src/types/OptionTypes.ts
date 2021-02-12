export enum Template {
	PERNG = 'perng',
	GRAPHQL = 'graphql',
	EXPRESS = 'express',
	TSC = 'tsc',
}

export interface Options {
	template?: Template;
	simple?: boolean;
}
