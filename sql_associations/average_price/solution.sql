--Assignment: Average Price Edit Next Module
--Using the SQL Lab tool: https://sql-lab.herokuapp.com/

--Write the following SQL Query: Select the average order total price for the `Lightweight Marble Gloves` product.
  SELECT products.name, AVG(line_items.price * line_items.quantity)
  FROM products
  INNER JOIN line_items
  ON products.id = line_items.product_id
  WHERE products.name ILIKE '%Gloves%'
  GROUP BY products.name;

  -- TYLER SUZUKI NELSON'S SOLUTION
  SELECT AVG(order_totals.total) FROM
    (
      SELECT SUM(line_items.price * line_items.quantity) AS total FROM products
    INNER JOIN line_items ON line_items.product_id = products.id
    WHERE products.name = 'Lightweight Marble Gloves'
    GROUP BY line_items.order_id
    ) order_totals;
