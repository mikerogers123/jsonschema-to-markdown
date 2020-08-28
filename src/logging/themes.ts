import { LogCategory } from './log-category';
import chalk = require('chalk');

type LoggerThemes = Record<LogCategory, chalk.Chalk>

const themes = {
    error: chalk.bold.red,
    info: chalk.whiteBright,
    warn: chalk.bgYellowBright.black.bold
}

export const loggerThemeMap: LoggerThemes = {
    [LogCategory.Information]: themes.info,
    [LogCategory.Error]: themes.error,
    [LogCategory.Warning]: themes.warn,
}