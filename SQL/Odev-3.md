# Ödev3
#### 1.
```sql
SELECT country FROM Country
WHERE country LIKE 'A%a';
```
#### 2.
```sql
SELECT country FROM Country
WHERE LENGTH (country)> 6 AND country LIKE '%n';
```
#### 3.
```sql
SELECT title FROM film
WHERE title ILIKE '%T%T%T%T%';
```
#### 4. 
```sql
SELECT * FROM film
WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;