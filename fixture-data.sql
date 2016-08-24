INSERT INTO
  users (id, email, password)
VALUES
  (1, 'ts22082@nunya.com', 'de-fen'),
  (2, 'lindsay@nunya.com', 'smith')
;

INSERT INTO
  todo_list_items (user_id, description, completed)
VALUES
  (1, '3 apples', false),
  (1, '4 oranges', false),
  (1, '3 tomatoes', false),
  (2, 'pasta', false),
  (2, 'chips', false),
  (2, 'soul', false)
;
