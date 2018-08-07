update products
set product_name = ${product_name}, product_price = ${product_price}, product_image = ${product_image}
where product_id = ${product_id}
returning *