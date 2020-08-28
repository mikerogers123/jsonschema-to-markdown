import { JsonSchema } from '../schema/json-schema';

export const validateSchema = (schema: JsonSchema) => {
    const isValid = true;

    if (!isValid) {
        throw new Error();
    }

    return schema;
}