# Commands

- Install Angular plugin `npm install -D @nx/angular`
- Install Nx Plugin `npm install -D @nx/plugin`
- Create a Empty Nx Plugin `npx nx generate @nx/plugin:plugin --name=documents --directory=plugins/documents --projectNameAndRootFormat=as-provided --tags=type:plugin`
- Create the generator inside of the documents plugin `npx nx generate @nx/plugin:generator --name=readme --directory=src/readme --nameAndDirectoryFormat=as-provided`


