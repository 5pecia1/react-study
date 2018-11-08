export class File {
  constructor(depth, name) {
    this.depth = depth;
    this.name = name;
  }
}

const PUBLIC_DIR = new File(0, 'public');
const INDEX_HTML = new File(1, 'index.html');
const SRC_DIR = new File(0, 'src');
const APP_JS = new File(1, 'App.js');
const FILE_LIST_JS = new File(1, 'FileList.js');
const FILE_STRUCTURE_JS = new File(1, 'FileStructure.js');
const INDEX_JS = new File(1, 'index.js');
const INDEX_INPUT_JS = new File(1, 'IndexInput.js');

export const FILE_LIST = [
  PUBLIC_DIR,
  INDEX_HTML,
  SRC_DIR,
  APP_JS,
  FILE_LIST_JS,
  FILE_STRUCTURE_JS,
  INDEX_JS,
  INDEX_INPUT_JS
];

/**
 * v: {
 *   list: [file]
 *   h: [file] //bolb
 * }
 */
export const INDXING_NUMBER = {
  14: {
    list: [PUBLIC_DIR, INDEX_HTML, SRC_DIR, APP_JS, INDEX_INPUT_JS],
    2: [APP_JS],
    3: [APP_JS],
    4: [APP_JS],
    5: [APP_JS],
    6: [INDEX_INPUT_JS]
  }
};