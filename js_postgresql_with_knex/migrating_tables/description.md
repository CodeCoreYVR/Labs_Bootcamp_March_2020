Begin a new NPM project, `knex_labs`.

Create a new database for the project.

With a migration file, create a `countries` table with the following columns:

- An `id` auto-incrementing primary key
- A `name` string
- A `code` string

With a another migration file, create a `populations` table with the following columns:

- An `id` auto-incrementing primary key
- A `year` integer
- A `quantity` integer
- A `country_id` foreign key

Run your migrations.

Check your database with `psql` to verify that they've been created successfully.
