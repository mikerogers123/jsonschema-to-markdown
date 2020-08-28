# jsonschema-to-markdown
Simple node tool to generate markdown from a JSON schema.

## Usage
Clone the repo: `git clone https://github.com/mikerogers123/jsonschema-to-markdown.git`.

Install the CLI: globally install the npm package, via `npm i -g .`.

This should now be accessible via the name `j2m`.

Run `j2m --src "source_JSON" --dest "dest_directory"` to pass in a parameter.

## Limitations & improvements
- Not much validation on inputs yet.
- Could publish to npm registry, negating the need to clone the repo.
- Validating that the input schema is V3 or V4.
- Help info from CLI.

And the big one is that currently it does not actually generate any meaningful markdown yet.
