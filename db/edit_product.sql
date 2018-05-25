update products
set product_image = $2, product_name = $3, product_price = $4
where product_id = $1;