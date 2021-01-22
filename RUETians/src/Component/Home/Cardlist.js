import React from 'react';
import Card from './Card' ;
import Info from './Profile/Info' ;


class Cardlist extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       route: '' ,
       series: '' ,
       dept: '' ,
       roll: '' ,
       email: '' 

    }
 }
  
 onRouteChange = (route) => {
    this.setState({route: route})
  } 

   onSeriesChange = (series) => {
    this.setState({series: series})
  }

   onDeptChange = (dept) => {
    this.setState({dept: dept})
  }

   onRollChange = (roll) => {
    this.setState({roll: roll})
  }

   onEmailChange = (email) => {
    this.setState({email: email})
  }




  render(){
 
     const {route, email, series, roll, dept} = this.state ;
     const {robots} = this.props ;


    return ( 
       <div>   
       { route === 'info'
     ? <Info email = {email} series = {series} dept = {dept} roll = {roll}  />
       : <div>
	{
		  robots.map((user,i)=>{           
			return (
				<Card key={i} 
				id={robots[i].id} 
				roll={robots[i].roll}
				first_name={robots[i].first_name} 
				last_name={robots[i].last_name}
				dept={robots[i].dept}
				series={robots[i].series}
				email={robots[i].email}
				onRouteChange={this.onRouteChange}
				onSeriesChange={this.onSeriesChange}
				onDeptChange={this.onDeptChange}
				onRollChange={this.onRollChange}
				onEmailChange={this.onEmailChange}
				 />
				);
		}
		)   
	}
	 </div>  
	}    
	</div>
    );
  }
}


export default Cardlist;



















