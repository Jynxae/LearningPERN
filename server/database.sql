CREATE DATABASE perntodo;

--SERIAL increments each data we do
--PRIMARY KEY is the uniqie identifier for each row
--FOREGIN KEY is what links the data from another table
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);