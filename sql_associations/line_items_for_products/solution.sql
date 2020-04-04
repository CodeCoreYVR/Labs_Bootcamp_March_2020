-- Assignment: [demo] Line Items for products Edit Next Module

-- Select all the products that have orders and their orders
-- 1. GET TO KNOW YOUR DATA.
-- a. looking at the schema or enrolled
-- b. query the tables themselves
SELECT * FROM products
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON orders.id = line_items.order_id;

-- Select all the products and their orders


-- [Note] the price in the line_items table is price per unit and not total price.

SELECT p.name, l.price, l.quantity, o.id
FROM products AS p
INNER JOIN line_items AS l ON l.product_id = p.id
INNER JOIN orders AS o ON o.id = l.order_id;
