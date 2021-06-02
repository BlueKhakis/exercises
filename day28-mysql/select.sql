SELECT *
FROM `countries`;


SELECT *
FROM `countries`
WHERE `population` > 20000000;


SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population` DESC;


SELECT *
FROM `countries`
WHERE `population` > 20000000
ORDER BY `population` ASC
LIMIT 10;