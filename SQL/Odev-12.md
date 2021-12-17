# Ödev 12
#### 1.
```sql
SELECT COUNT (*) FROM film
WHERE length >
(
	SELECT AVG(length) FROM film
);
Cevap: 489
```
#### 2.
```sql
SELECT COUNT (*) FROM film
WHERE rental_rate = 
(
	SELECT MAX(rental_rate) FROM film
);
Cevap: 336
```
#### 3.
```sql
SELECT * FROM film
WHERE film_id = ANY
( 
      SELECT film_id FROM film
      WHERE rental_rate = ( SELECT MIN(rental_rate ) FROM film )
      AND
      replacement_cost = ( SELECT MIN(replacement_cost) FROM film ) 
);
```
#### 4.
```sql
SELECT customer.customer_id, COUNT(payment_id) FROM payment
JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY customer.customer_id 
ORDER BY COUNT(payment_id) DESC;
```