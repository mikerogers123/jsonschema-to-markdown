# jsonschema-to-markdown
Simple node tool to generate markdown from a JSON schema.

## Usage
Install [NodeJS](https://nodejs.org/en/) if you have not already.

Clone the repo: `git clone https://github.com/mikerogers123/jsonschema-to-markdown.git`.

Install the CLI: globally install the npm package, via `npm i -g .`.

This should now be accessible via the name `j2m`.

Run `j2m --src "source_JSON_path"` to pass in the source JSON. This will write the markdown to the console.

If you want to save the markdown, then the implementation will depend on your chosen shell. On windows, `j2m --src "source_JSON_path" > out_path` will write the markdown output to `out_path`.

Logs are written to the configured `logoutput` file, specified in the `package.json`.

## Limitations & improvements
- Not much validation on inputs yet.
- Could publish to npm registry, negating the need to clone the repo.
- Validating that the input schema is V3 or V4.
- Help info from CLI.

And the big one is that currently it does not actually generate any meaningful markdown yet.
