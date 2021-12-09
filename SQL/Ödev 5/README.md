-- 1
SELECT *
FROM film
WHERE title LIKE '%n'
ORDER BY LENGTH (title) DESC
LIMIT 5;

-- 2
SELECT *
FROM film
WHERE title LIKE '%n'
ORDER BY LENGTH (title) ASC
OFFSET 5
LIMIT 5;

-- 3
SELECT  last_name, store_id
FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;