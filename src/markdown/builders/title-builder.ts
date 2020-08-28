import { JsonSchema } from 'src/schema/json-schema';
import { MarkdownBuilder } from 'markdown-doc-builder';

export default function build(json: JsonSchema) {
    return (md: MarkdownBuilder) => md
        .h1(json.title)
        .text(json.description);
}
