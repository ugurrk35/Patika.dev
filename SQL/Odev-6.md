# Ödev 6
#### 1.
```sql
SELECT AVG(rental_rate) FROM film;
Cevap: 2.980..
```
#### 2.
```sql
SELECT COUNT(*) FROM film
WHERE title LIKE 'C%';
Cevap: 92
```
#### 3.
```sql
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;
Cevap: 184
```
#### 4.
```sql
SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE length > 150;
Cevap: 21
```