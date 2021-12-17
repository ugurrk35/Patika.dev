# Ödev 7
#### 1.
```sql
SELECT COUNT(*) FROM film
GROUP BY rating;
```
#### 2.
```sql
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(replacement_cost)>50;
```
#### 3.
```sql
SELECT COUNT(*) FROM customer
GROUP BY store_id;
```
#### 4.
```sql
SELECT country_id, COUNT(*) FROM city
GROUP BY country_id
ORDER BY COUNT (*) DESC
LIMIT 1;
```