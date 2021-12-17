# Ödev 9
#### 1.
```sql
SELECT city,country FROM city
INNER JOIN country ON country.country_id = city.country_id;
```
#### 2.
```sql
SELECT payment_id,first_name, last_name FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id;
```
#### 3.
```sql
SELECT rental_id,first_name, last_name FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id;