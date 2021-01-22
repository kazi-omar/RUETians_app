
import React from 'react';
import  './SearchBox.css'; 
import Scroll from '../Scroll';


class SearchBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          robots: [] ,
          searchfield: ''  
    }
  }
componentDidMount(){
    fetch(`http://localhost:3000/card`)
    .then(response=> response.json())
    .then(users =>{
      this.setState({robots: users})
    })  
  }

      onSearchChange = (event)=> {
   this.setState({searchfield: event.target.value});
}



  render(){
     const {robots,searchfield} = this.state;
      const {Roll} = this.props ;

       const filterRobots = robots.filter(robot =>{  
      return  robot.roll !== Roll 
    }
    )

     const filteredRobots = filterRobots.filter(robot => {  
      return  robot.first_name.toLowerCase().includes(searchfield.toLowerCase()  ) ||  
            robot.dept.toLowerCase().includes(searchfield.toLowerCase() )  || 
            robot.last_name.toLowerCase().includes(searchfield.toLowerCase() )  || 
            robot.series == searchfield
   }
   )
    return ( 
      <div>
    <Scroll searchChange = {this.onSearchChange}  filteredRobots={filteredRobots} />
    </div>
    );
  }
  
}

export default SearchBox;



