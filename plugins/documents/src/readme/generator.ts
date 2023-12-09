import { formatFiles, generateFiles, getProjects, Tree } from '@nx/devkit';
import * as path from 'path';

export async function readmeGenerator(tree: Tree) {
  const projects = getProjects(tree);

  const listOfLibraries = [];
  const listOfApps = [];
  const listOfEmpties = [];

  for (const iterator of projects.keys()) {
    switch (projects.get(iterator).projectType) {
      case 'library':
        listOfLibraries.push(iterator);
        break;
      case 'application':
        listOfApps.push(iterator);
        break;
      default:
        listOfEmpties.push(iterator);
        break;
    }
  }

  generateFiles(tree, path.join(__dirname, 'files'), './', {
    projects,
    apps: listOfApps,
    libs: listOfLibraries,
  });
  await formatFiles(tree);
}

export default readmeGenerator;
