-- CREATE DATABASE cake_shop;
--
-- USE cake_shop;

CREATE TABLE subscribers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- CREATE TABLE customers (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(100) NOT NULL,
--   last_name VARCHAR(100) NOT NULL,
--   email VARCHAR(100) NOT NULL,
--   quote VARCHAR(255) NOT NULL,
--   img_url VARCHAR(255),
--   created_at TIMESTAMP DEFAULT NOW()
-- );
