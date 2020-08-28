
import { MarkdownBuilder } from 'markdown-doc-builder';
import { JsonSchema } from 'src/schema/json-schema';

export default function build(json: JsonSchema){
    return (md: MarkdownBuilder) => md
        .h2('Raw JSON Schema')
        .code(JSON.stringify(json));
}
