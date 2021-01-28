export enum Template {
	GRAPHQL = 'graphql',
	EXPRESS = 'express',
	TSC = 'tsc',
}

export interface Options {
	template?: Template;
	simple?: boolean;
}
