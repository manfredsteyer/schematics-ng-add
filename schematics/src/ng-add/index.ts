import { Rule, SchematicContext, Tree, chain, branchAndMerge } from '@angular-devkit/schematics';
import { addDeclarationToAppModule } from './add-declaration-to-module.rule';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngAdd(options: any): Rule {
  
  return (tree: Tree, _context: SchematicContext) => {

    tree.create('hello.txt', 'Hello World!');

    const appModule = '/src/app/app.module.ts';

    return chain([
      branchAndMerge(chain([
        addDeclarationToAppModule(appModule)
      ])),
    ])(tree, _context);

    // return tree;
  };
}
