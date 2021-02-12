#!/usr/bin/env node
import { cyan, green } from 'chalk';
import { Command, Option } from 'commander';

import copyTemplate from './lib/copyTemplate';
import initGitRepo from './lib/initGitRepo';
const pkg = require('../package.json');

let appDir: any;
const program = new Command(cyan(`npx ${pkg.name}`))
	.version(pkg.version)
	.description(pkg.description)
	.usage(green('<app-directory> [options]'))
	.arguments('[app-directory]')
	.action((appDirectory) => {
		appDir = appDirectory;
	})
	.addOption(
		new Option('-t, --template <app>', 'Choose app template')
			.choices(['perng', 'graphql', 'express', 'tsc'])
			.default('perng')
	)
	.option('-s, --simple', 'Use simple template')
	.parse();

if (!appDir) {
	program.outputHelp();
	console.log();
	console.log(
		'For example, to generate an Express app w/ auth template, run command:'
	);
	console.log(
		`  ${program.name()} ${green('my-app')} ${cyan('-t')} ${green('express')}\n`
	);
	process.exit();
}

console.log();

const options = program.opts();
copyTemplate(appDir, options);
initGitRepo(options);

console.log(`${green('Done!')}\n`);
