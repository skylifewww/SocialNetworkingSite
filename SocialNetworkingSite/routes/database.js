var mariadb = require('mariasql');

var db = new mariadb(
{
	host: 'nj20.host.cs.st-andrews.ac.uk',
	user: 'nj20',
	password: 'u3.C1R8jP0Mhj5',
	db: 'nj20_cs3101_db'
});

var query = function(query, callback)
{
	db.query(query, callback);
}
module.exports = 
{
	query : query
}