import { JsonSchema } from 'src/schema/json-schema';

export type MarkdownGenerationResult = Readonly<{
    markdown: string,
    schema: JsonSchema
}>
