Using any combination of `mkdir`, `cp` and `move`, reproduce the following
directory structure where each directory is named after a person representing a
ancestry tree:

```
.
└── gertrude_styles
   ├── anyanka_smith
   │  └── john_smith
   │     └── jenny_smith
   ├── bianca_grave
   │  └── lola_tul
   │     ├── fernando_tul
   │     └── herve_tul
   └── jim_styles
      └── bob_styles
         └── karen_styles_grim
            └── emma_styles_grim
```

If you want to verify the structure of your directories, you can install the
command `tree`.

On MacOS, you can install it with [Homebrew](https://brew.sh/):

```
brew install tree
```

On Linux, it may already be installed. Try typing `tree`. If it tells you that
the command is not found, you will have to install it.

On a Debian based distribution like Ubuntu, type the following to install it:

```
sudo apt-get install tree
```
