-- 1
SELECT rating, COUNT(rating)
FROM film
GROUP BY  rating;

-- 2
SELECT COUNT(replacement_cost)
FROM film
WHERE replacement_cost > 50
GROUP BY replacement_cost;

-- 3
SELECT COUNT(customer_id)
FROM customer
GROUP BY store_id;

-- 4
SELECT country_id, COUNT(city)
FROM city
GROUP BY country_id
ORDER BY COUNT DESC;