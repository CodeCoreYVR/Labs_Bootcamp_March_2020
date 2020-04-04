Write a script, `populatePopulations.js`, in your NPM project that you created previously. This script should populate the `populations` table using data from the attached [CSV file](https://certifiedin.s3.amazonaws.com/uploads/attachment/file/2163/population.csv) in the previous lab.

The text below is a sample of the CSV file's contents. Use its last two columns to populate the `populations` table where "Year" corresponds to `populations.year` and "Value" corresponds to `populations.quantity`.

For the `country_id`, get the `id` of the associated country from the `countries` table.

This should create a table holding the yearly populations of countries.

```csv
Country Name,Country Code,Year,Value
Arab World,ARB,1960,92490932
Arab World,ARB,1961,95044497
Arab World,ARB,1962,97682294
Arab World,ARB,1963,100411076
Caribbean small states,CSS,1960,4198307
Caribbean small states,CSS,1961,4277802
Caribbean small states,CSS,1962,4357746
Caribbean small states,CSS,1963,4436804
Central Europe and the Baltics,CEB,1960,91401583
Central Europe and the Baltics,CEB,1961,92237118
Central Europe and the Baltics,CEB,1962,93014890
Central Europe and the Baltics,CEB,1963,93845749
```

## Stretch

Do it with a seed file.
