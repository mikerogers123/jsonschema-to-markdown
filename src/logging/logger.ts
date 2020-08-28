import { loggerThemeMap } from './themes';
import { LogCategory } from './log-category';

const logger = console.log;

export const log = (msg: string, category: LogCategory = LogCategory.Information) => {
  const theme = loggerThemeMap[category];

  logger(theme(msg));
};