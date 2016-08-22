-- SCHEMA

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128),
    encrypted_password VARCHAR(255)
  )
;

CREATE TABLE
  todo_list_items (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    rank INTEGER NOT NULL,
    description VARCHAR(255) NOT NULL,
    note TEXT,
    due_date TIMESTAMP
  )
;

-- dummy fixture data

INSERT INTO
  users
VALUES
  (1, 'jared@example.org', '50m3Bu115it'),
  (2, 'thomas@example.org', '50m30th3rBu115it')
;

-- create a new todo
INSERT INTO
  todo_list_items (user_id, rank, description)
VALUES
  (1, 10, 'Buy a cow'),
  (1, 20, 'Buy a chicken'),
  (1, 30, 'Buy a horse'),
  (1, 40, 'set them free!'),
  (2, 10, 'Buy a cow'),
  (2, 20, 'Buy a chicken'),
  (2, 30, 'Buy a horse'),
  (2, 40, 'punch your animals!')
;

-- QUERIES

-- give me all the todo list items for a user
SELECT
  *
FROM
  todo_list_items
WHERE
  user_id=1
ORDER BY
  rank ASC

SELECT
  *
FROM
  todo_list_items
WHERE
  user_id=2
ORDER BY
  rank ASC


-- change the order of todos
UPDATE
  todo_list_items
SET
  rank=$1
WHERE
  id=$2


