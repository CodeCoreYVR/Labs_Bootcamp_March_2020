Attached to this problem is a file containing 5 lines each with a single URL.
Download the file. Using promise based `fs` methods (i.e. `fs.readFile`,
`fs.writeFile`, `fs.mkdir`, etc) and `node-fetch`, do the following:

1. Read the lines of the attached file.
2. Make a HTTP GET request to each URL in the file.
3. Process the response bodies.
4. Create a directory with `fs.mkdir` to store some files.
5. Inside the created directory, create one file per request saving the parsed
   bodies inside.

You may use any combination of plain promises and the async/await syntax.
