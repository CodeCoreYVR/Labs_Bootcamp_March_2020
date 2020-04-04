**Using nano create 3 files containing at least 3 lines of text. Name them:**

- memoir.txt
- agenda.txt
- calendar.txt

```bash
nano
# then type your three lines
# then CTRL + X then type yes
# then name the file (memoir.txt)
# Repeat the same process for (agenda.txt, and calendar.txt)
```

**Using cat and a redirection operator (i.e. > or >>), create another file from the contents of the 3 files created in the previous step, named: compilation.txt. It should contain all of the text inside of memoir.txt, agenda.txt and calendar.txt.**

```bash
# then run then following command to copy them into compilation.txt
cat {memoir.txt,agenda.txt,calendar.txt} >> compilation.txt
```

**Using mv, move memoir.txt inside the gertrude_styles directory. Then, move agenda.txt inside the lola_tul directory. Then, move calendar.txt to the emma_styles_grim directory.**

```bash
mv memoir.txt /gertrude_styles
mv agenda.txt /gertrude_styles/bianca_grave/lola_tul
mv calendar.txt /gertrude_styles/jim_styles/bob_styles/karen_styles_grim/emma_styles_grim
```

**Using cp, copy memoir.txt from gertrude_styles to the herve_tul directory. Again using cp, copy the herve_tul directory to bob_styles renaming it to herve_styles.**

```bash
cp gertrude_styles/memoir.txt gertrude_styles/bianca_grave/lola_tul/herve_tul
cp -R gertrude_styles/bianca_grave/herve_tul gerturde_styles/jim_styles/bob_styles/herve_styles
```
