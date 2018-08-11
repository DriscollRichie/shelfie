update products
set product_name = ${product_name}, product_price = ${product_price}, product_image = ${product_image}
where shelf = ${shelf} and bin = ${bin}
returning *