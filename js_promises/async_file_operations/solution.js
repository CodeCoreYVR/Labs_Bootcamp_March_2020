const pfs = require('./pfs');

(async () => {
  const pathToDir = './samples';
  const fileNames = await pfs.readdir(pathToDir);
  const contents = await Promise.all(
    fileNames.map(fileName => pfs.readFile(`${pathToDir}/${fileName}`, 'utf8')),
  );
  await pfs.writeFile('file.txt', contents.join('\n'));
  console.log('Wrote to file: file.txt');
})();
