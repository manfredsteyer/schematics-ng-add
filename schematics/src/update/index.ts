import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function update(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    _context.logger.info('Running update schematic ...');

    // Hardcoded path for the sake of simplicity
    const appModule = './src/app/app.module.ts';

    const buffer = tree.read(appModule);
    if (!buffer) return tree;
    const content = buffer.toString('utf-8');

    // One more time, this is for the sake of simplicity
    const newContent = content.replace('LoggerModule.forRoot(', 'LoggerModule.configure(');
    tree.overwrite(appModule, newContent);

    return tree;
  };
}
