# Ödev 4
#### 1.
```sql
SELECT DISTINCT replacement_cost FROM film; 
```
#### 2.
```sql
SELECT COUNT (DISTINCT replacment_cost) FROM film; 
```
#### 3.
```sql
SELECT COUNT (*) FROM film 
WHERE title LIKE 'T%' AND rating = 'G';
```
#### 4.Country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
```sql
SELECT COUNT (*) FROM COUNTRY 
WHERE LENGTH(counrty) = 5;
```
#### 5.
```sql
SELECT COUNT (*) FROM City 
WHERE city ILIKE '%r';