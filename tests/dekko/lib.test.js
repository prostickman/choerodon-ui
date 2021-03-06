const $ = require('dekko');

$('lib')
  .isDirectory()
  .hasFile('index.js')
  .hasFile('index.d.ts');

$('lib/*')
  .filter((filename) => {
    return !filename.endsWith('index.js')
      && !filename.endsWith('index.d.ts');
  })
  .isDirectory()
  .filter((filename) => {
    return !filename.endsWith('style')
      && !filename.endsWith('rc-components')
      && !filename.endsWith('_util');
  })
  .hasFile('index.js')
  .hasFile('index.d.ts')
  .hasDirectory('style');

$('lib/*/style')
  .hasFile('css.js')
  .hasFile('index.js');

$('lib/style')
  .hasFile('v2-compatible-reset.css');

// eslint-disable-next-line
console.log('`lib` directory is valid.');
