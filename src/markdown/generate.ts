import { JsonSchema } from '../schema/json-schema';
import { log } from '../logging/logger';

export const generateMarkdown = (schema: JsonSchema): string => {
    log.info('Generating MD');

    return '#Title\n\nHello world';
}