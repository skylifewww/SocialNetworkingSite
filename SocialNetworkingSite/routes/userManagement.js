var db = require('./database')

var registerUser = function(userInfo)
{
	if(!validateUserInformation(userInfo))
	{
		return false;
	}

	generateUserId(function(userId)
	{
		var query = "INSERT INTO User (idUser, name, password, email, age) VALUES('" +
					userId + "','" +
					userInfo.name + "','" +
					userInfo.password + "','" +
					userInfo.email + "','" +
					userInfo.age + "');";

		db.query(query, function(err, rows){});
	});

	return true;
}

var signInUser = function(email, password, res)
{

	var query = "SELECT * FROM User WHERE email = '" + email + "' AND password = '" + password + "';";

	db.query(query, function(err, rows)
	{
		console.log(rows.info.numRows)
		if(rows.info.numRows == 0)
		{
			res.json({'login' : 'false'})
		}
		else
		{		
			res.json({'login' : 'true'})
		}
	});
}

var validateUserInformation = function(userInfo)
{
	if(userInfo.name == undefined  || !userInfo.name.match("^[a-zA-Z0-9_ ]+$"))
	{
		return false;
	}

	if(userInfo.password == undefined  || !userInfo.password.match("^[a-zA-Z0-9_ ]+$"))
	{
		return false;
	}

	if(userInfo.email == undefined  || userInfo.email.indexOf("@") == -1)
	{
		return false;
	}

	if(userInfo.age == undefined  || !userInfo.age.match("^[0-9]*$"))
	{
		return false;
	}
	return true;
}

newGeneratedId = 0;

var generateUserId = function(callback)
{
	db.query('SELECT COUNT(*) AS numberOfUsers FROM User', function(err, rows)
	{
		var idUser = parseInt(rows[0].numberOfUsers) + 1
		callback(idUser);
	});
}

module.exports = 
{
	registerUser : registerUser,
	signInUser : signInUser
}