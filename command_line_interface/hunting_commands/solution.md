## Solution

- Find a command to list the commands that you have used recently.

```bash
history | tail
history 25
```

- Find a command to delete a file. Try it on a file that you’ve created with touch.

```bash
rm filename (filename2 filename3)
unlink filename
```

- Find out how to delete a directory with the command you found in **2**.

  ```bash
  # Empty directory:
  rm -d dirname
  e
  # Non-empty directory:
  rm -r dirname1 (dirname2 dirname3)
  e
  ```

- Find a command to search for files and/or directories by their names.

```bash
find . -name “filename”
find . -iname “filename” (ignore the case of the filename)
find . -name fil\* (find files or directories start with fil)
find . -iname fil\*
find ~ -name “filename” (searching throughout the whole computer)
```

- Find a command to list all active running programs (i.e. processes) like your OS’ Activity Monitor.

```bash
top -o cpu
```

## Stretch

- Find a command to download files from the internet.

```bash
curl -O <url> (do not include “<>“, O has to be in capital case)
```

- Find a command to search for text inside of files. How can you search files within directories recursively?

```bash
grep -r “word” file1 file2 file3
```
