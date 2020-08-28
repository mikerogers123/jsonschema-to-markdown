import { JsonSchema } from '../schema/json-schema';
import { log } from '../logging/logger';
import { default as titleBuilder } from './builders/title-builder';
import { default as rawSchemaBuilder } from './builders/raw-spec-builder';
import { default as newLineBuilder } from './builders/new-line-builder';
import markdown from 'markdown-doc-builder';

export const generateMarkdown = (schema: JsonSchema): string => {
    log.info(`Building markdown from ${schema}`);

    const builders = [
        titleBuilder(schema),
        rawSchemaBuilder(schema)
    ];

    return builders.reduce(
        (md, builder) => {
            const newMarkdown = builder(md);

            const addNewLines = newLineBuilder(schema);

            return addNewLines(newMarkdown);
        },
        markdown.newBuilder()
    ).toMarkdown();
}