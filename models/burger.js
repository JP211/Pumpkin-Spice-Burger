// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");
// Also inside burger.js, create the code that will 
// call the ORM functions using burger specific input for the ORM.
// selectAll() // insertOne() // updateOne()

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res)
    });
  },
  updateOne: function(burger_name, cb) {
    orm.updateOne("burgers", burger_name, function(res){
      cb(res)
    });
  },
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", burger_name, function(res){
      cb(res)
    });
  },
  deleteOne: function(burger_name, cb) {
    orm.deleteOne("burgers", burger_name, function(res){
      cb(res)
    });
  }
};

// Export at the end of the burger.js file.
module.exports = burger;
