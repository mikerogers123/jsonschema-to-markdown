import { JsonSchema } from '../schema/json-schema';
import { MarkdownGenerationResult } from './generation-result';
import { log } from '../logging/logger';

export const generateMarkdown = (schema: JsonSchema): MarkdownGenerationResult => {
    log('Generating MD');

    return {
        schema,
        markdown: '#Title\n\nHello world'
    }
}