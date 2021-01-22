
const handleRegister = (req, res, db, bcrypt) => {
  const{roll, email, first_name, last_name, series, dept, password} = req.body ;
  if (!roll || !email || !first_name || !last_name ||  !series || !dept || !password) {
    return res.status(400).json('incorrect form submission') ;
  }
  const hash = bcrypt.hashSync(password) ;

    db.transaction(trx => {
    	trx.insert({
    		hash: hash ,
    		email: email 
    	})
    	.into('login')
    	.returning('email')
    	.then(loginEmail => {
    		return trx('users')
			    .returning('*')
			    .insert({
			   	  email: loginEmail[0]  ,
            roll: roll ,
			   	  first_name: first_name ,
            last_name: last_name ,
            series: series ,
            dept: dept ,
			   	  joined: new Date()
			   })
			     .then(user => {
			   	    res.json(user[0]);
			   })
    	})
    	 .then(trx.commit)
    	 .catch(trx.rollback)
    })
      .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
    handleRegister: handleRegister
} ;