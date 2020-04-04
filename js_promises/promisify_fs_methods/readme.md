Promisify Node's [fs.readFile](hhttps://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback), [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) and [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback). Each of the methods perform operations on the file system asynchronously: the first reads contents from a file, the second writes content to a file and the last reads file names from a dir into an array.

Using what you've learned about creating promises, create a promisified versioned for each of the methods above. Create them as a methods of an object assigned to the variable, `pfs`.

## Example usage:

```javascript
pfs
  .writeFile("file.txt", "The contents of my file", "utf8")
  .then(() => console.log("File write complete!"))
  .catch(console.error);

pfs
  .readdir(".")
  .then(fileNames => console.log(fileNames.join(", ")))
  .catch(console.error);

pfs
  .readFile("file.txt", "utf8")
  .then(data => console.log(data))
  .catch(console.error);
```
