-- Assignment: [lab] Queries 2 Edit Next Module
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Queries:

-- Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
  SELECT products.id, products.name, (SUM(line_items.quantity) + products.remaining_quantity) AS total_quantity
  FROM line_items
  INNER JOIN products ON line_items.product_id = products.id
  GROUP BY products.id
  ORDER BY total_quantity DESC;

-- Find the average order total price for all the orders in the system

  SELECT AVG(total_price) AS average_order_total
  FROM (
    SELECT order_id, SUM(price * quantity) as total_price
    FROM line_items
    GROUP BY order_id
  ) AS average;
