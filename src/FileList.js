export class File {
  constructor(depth, name) {
    this.depth = depth;
    this.name = name;
  }
}

export const FILE_LIST = [
  new File(0, 'public'),
  new File(1, 'index.html'),
  new File(0, 'src'),
  new File(1, 'App.js'),
  new File(1, 'FileList.js'),
  new File(1, 'FileStructure.js'),
  new File(1, 'index.js'),
  new File(1, 'IndexInput.js')
];