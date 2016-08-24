DROP TABLE IF EXISTS todo_list_items;

CREATE TABLE
  todo_list_items (
    id SERIAL PRIMARY KEY,
    description TEXT,
    completed BOOLEAN
  );

