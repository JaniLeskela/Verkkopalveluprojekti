DROP TABLE IF EXISTS order_line;
DROP TABLE IF EXISTS customer_order;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_category;

CREATE TABLE product_category(
    category_name VARCHAR(255) NOT NULL PRIMARY KEY,
    category_description VARCHAR(500)
);

CREATE TABLE product(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    image_url VARCHAR(255),
    category VARCHAR(255),
    FOREIGN KEY (category) REFERENCES product_category(category_name)
);

CREATE TABLE customer(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    username VARCHAR(255) UNIQUE,
    pw VARCHAR(255)
);

CREATE TABLE customer_order(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    order_date DATETIME NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE order_line(
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES customer_order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);


INSERT INTO product_category VALUES ('Vaalet Oluet', ''),
('Tummat Oluet', ''),('Valkoviinit', ''),('Punaviinit', ''), ('Viinat', '');


INSERT INTO product (product_name, price, category) VALUES ('Karhu', 3.60, 'Vaaleat Oluet'),('Sandels', 3.40, 'Vaaleat Oluet'), ('El Coto', 16.90, 'Punaviinit'),
('Guinnes', 5.60, 'Tummat Oluet'), ('Avondale Cyclus', 30, 'Valkoviinit'), ('Suomi Viina', 16.90, 'Viinat'), ('Olvi Tuplapukki', 5.40, 'Vaaleat Oluet'), ('Corona', 4.40, 'Vaaleat Oluet')
, ('Heinecken', 2.20,'Vaalet Oluet'), ('Karhu Kupari', 3.40, 'Tummat Oluet'), ('A. Le Coq Porter', 3.99, 'Tummat Oluet'), ('Buen Chico Tinto', 10.99, 'Punaviinit'), ('Panizzi Erminus Pinot Nero',  47.80, 'Punaviinit'), ('La Cardinal Cristal', 24.50 , 'Valkoviinit'), ('Cannonball Sauvignon Blanc', 30.00, 'Valkoviinit');