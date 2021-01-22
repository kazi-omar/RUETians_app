import React from 'react';
import About from './About' ;


class Info extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        profile: [ {
          name: '' , 
          pass_year : '' ,
          workplace: '' ,
          designation: '' ,
          present_address: '' ,
          permanent_address: '' ,
          email: ''
      }  
      ]
    }
  }


     componentDidMount(){
             fetch(`http://localhost:3000/info` , 
             {
                method: 'post' ,
                headers: {'Content-Type' : 'application/json' } , 
                body : JSON.stringify(
                {
                    email: this.props.email
                })
             })
            .then(response=> response.json())
            .then(users =>{
                
              this.setState({profile: {
                name: users.name , 
                pass_year: users.pass_year,
                workplace: users.workplace,
                designation: users.designation,
                present_address: users.present_address,
                permanent_address: users.permanent_address,
                email: users.email
    }})

            })  
          } 

  

  render(){
     const { profile} = this.state;
     const {roll, series, dept} = this.props ;
    
    return ( 
      <div>

		        <About  
                name = {profile.name}  
                roll = {roll}
                series = {series}
                dept = {dept}
                pass_year = {profile.pass_year}
                workplace = {profile.workplace}
                designation = {profile.designation}
                present_address = {profile.present_address}
                permanent_address = {profile.permanent_address}
                email = {profile.email}
            />
   
	   </div>
    );
  }
}


export default Info;