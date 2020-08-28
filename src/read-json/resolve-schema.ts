import { readJson } from './read-json';
import $RefParser = require('@apidevtools/json-schema-ref-parser');

export const parseSchema = (schemaPath: string) =>
    $RefParser.dereference(readJson(schemaPath));