var pgp = require('pg-promise')();
var connection = `postgres://${process.env.USER}@localhost:5432/lg_todo`
var db = pgp(connection);

module.exports = {

  getAllUsers: function(){
    var sql = `
      SELECT 
        * 
      FROM 
        todo_list_items  
    `
    return db.any(sql)
  },

  getUserById: function(userId){
    var sql = `
      SELECT 
        * 
      FROM 
        todo_list_items
      WHERE
        id=$1
    `
    var variables = [userId]
    return db.one(sql, variables)
  },

  getTodosById: function(){
    var sql = `
      SELECT
        *
      FROM
        todo_list_items
    `
    return db.any(sql)
  },

  deleteTodo: function(todoId){
    var sql = `
      DELETE FROM
        todo_list_items
      WHERE
        id=$1
    `
    var variables = [todoId]
    return db.none(sql, variables)
  }
}


