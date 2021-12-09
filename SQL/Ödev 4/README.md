-- 1
SELECT DISTINCT replacement_cost
FROM film;

-- 2
SELECT COUNT(DISTINCT replacement_cost)
FROM film;

-- 3
SELECT *
FROM film
WHERE title LIKE 'T%' AND rating = 'G';

-- 4
SELECT *
FROM country
WHERE LENGTH (country) = 5;

-- 5
SELECT *
FROM city
WHERE city ILIKE '%r';