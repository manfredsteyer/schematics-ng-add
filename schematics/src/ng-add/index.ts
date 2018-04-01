import { Rule, SchematicContext, Tree, branchAndMerge } from '@angular-devkit/schematics';
import { addDeclarationToAppModule } from './add-declaration-to-module.rule';
import { NgAddOptions } from './schema';

export function ngAdd(options: NgAddOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    // For sake of simplicity, assume default folder structure 
    let appModule = `projects/${options.project}/src/app/app.module.ts`;
    
    let rule = branchAndMerge(addDeclarationToAppModule(appModule));
    return rule(tree, _context);
  };
}
