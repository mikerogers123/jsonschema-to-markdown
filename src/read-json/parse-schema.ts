import { readJson } from './read-json';

import $RefParser = require('@apidevtools/json-schema-ref-parser');
import { log } from '../logging/logger';

export function parseSchema(schemaPath: string) {
    return $RefParser
        .dereference(readJson(schemaPath))
        .then(obj => {
            log(obj.toString());
        });
}