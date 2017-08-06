// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");
// In the orm.js file, create the methods that will execute the necessary 
// MySQL commands in the controllers. These are the methods you will need 
// to use in order to retrieve and store data in your database.
// selectAll() // insertOne() // updateOne()

var orm = {
    // This selects all of the burgers
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    // This updates the burger when devoured
    updateOne: function(tableInput, burger_name, cb) {
        var queryString = 'UPDATE ' + tableInput + "SET devoured=true WHERE burger_name = '" + burger_name + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + burger_name + "', false );";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, burger_name, cb) {
        var queryString = "UPDATE " + tableInput + " SET devoured = 1 WHERE burger_name = '" + burger_name + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, burger_name, cb) {
        var queryString = "INSERT INTO " + tableInput + " (burger_name, devoured) VALUES ('" + burger_name + "',false);";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(tableInput, burger_name, cb) {
        var queryString = "DELETE FROM " + tableInput + " WHERE burger_name = '" + burger_name + "';";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};


// Export the ORM object in module.exports
module.exports = orm;