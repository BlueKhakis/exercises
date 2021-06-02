SELECT *
FROM `cities`
WHERE `district` LIKE '%Holland';

SELECT *
FROM `cities`
WHERE `name` NOT LIKE '%ville%';


SELECT *
FROM `cities`
WHERE `country_id` NOT IN (56, 199, 172, 98)
ORDER BY `population` DESC
LIMIT 10;


-- 10 largest cities ordered from smallest
-- using a subquery
SELECT *
FROM (
    SELECT *
    FROM `cities`
    WHERE `country_id` IN (56, 199, 172, 98)
    ORDER BY `population` DESC
    LIMIT 10
) largest_cities
ORDER BY `population` ASC