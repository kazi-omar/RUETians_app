const handleCardGet = (req, res, db) => {          
    db.select('*').from('users')
    .then(user =>{
    		res.json(user);
    	}
    )
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleCardGet: handleCardGet
} ;