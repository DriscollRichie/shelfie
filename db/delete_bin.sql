update products
set product_name = null, product_price = null, product_image = null
where product_id = ${product_id}
returning *