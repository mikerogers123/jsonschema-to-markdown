import { program } from 'commander';

program
  .version('0.0.1')
  .description('A CLI for generating markdown from JSON')
  .option('-s, --source', 'Directory containing the JSON files, used for generating to .md files')
  .option('-d, --destination', 'Directory to send the .md files to')
  .parse(process.argv);

console.log(`Description: ${program.description()}`);