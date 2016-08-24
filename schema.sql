DROP TABLE IF EXISTS users;
CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );

CREATE UNIQUE INDEX email ON users (email);

DROP TABLE IF EXISTS todo_list_items;

CREATE TABLE
  todo_list_items (
    id SERIAL PRIMARY KEY,
    description TEXT,
    completed BOOLEAN
  );

