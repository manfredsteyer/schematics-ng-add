import { Rule, SchematicContext, Tree, branchAndMerge } from '@angular-devkit/schematics';
import { addDeclarationToAppModule } from './add-declaration-to-module.rule';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngAdd(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const appModule = '/src/app/app.module.ts';
    let rule = branchAndMerge(addDeclarationToAppModule(appModule));
    return rule(tree, _context);
  };
}
