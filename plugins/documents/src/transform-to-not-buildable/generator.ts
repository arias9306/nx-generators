import {
  formatFiles,
  getProjects,
  ProjectConfiguration,
  Tree,
  updateProjectConfiguration,
} from '@nx/devkit';

export async function transformToNotBuildableGenerator(tree: Tree) {
  const projects = getProjects(tree);

  for (const iterator of projects.keys()) {
    const project = projects.get(iterator);
    const projectConfiguration = project.targets;
    if (
      !project?.tags?.includes('type:plugin') &&
      project?.projectType === 'library' &&
      projectConfiguration &&
      projectConfiguration['build']
    ) {
      const libName = project.name || '';
      removeFile(tree, project, 'ng-package.json');
      removeFile(tree, project, 'package.json');

      // Remove build target
      delete projectConfiguration['build'];

      updateProjectConfiguration(tree, libName, project);
    }

    await formatFiles(tree);
  }
}

function removeFile(
  tree: Tree,
  project: ProjectConfiguration,
  fileName: string
) {
  if (tree.exists(`${project?.sourceRoot}/../${fileName}`)) {
    tree.delete(`${project?.sourceRoot}/../${fileName}`);
  }
}

export default transformToNotBuildableGenerator;
