const handleAbout = (req, res, db) => {

  const{name, pass_year, workplace , present_address , permanent_address, designation, email} = req.body ;
   db('profile')

     .returning('*')
     .insert({   	  
         name: name, 
         pass_year: pass_year,
         workplace: workplace , 
         designation: designation , 
         present_address :  present_address , 
         permanent_address: permanent_address ,
         email: email
   })

     .then(user => {
   	    res.json(user[0]);
   })
      .catch(err => res.status(400).json(err))
}

module.exports = {
    handleAbout: handleAbout
} ;
