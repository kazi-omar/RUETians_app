import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './Component/Navigation/Navigation';
import Signin from './Component/Signin/Signin';
import Register from './Component/Register/Register';
import './App.css';
import Logo from './Component/Logo/Logo';
import SearchBox from './Component/Home/SearchBox/SearchBox';
import Rank from './Component/Rank/Rank';
import Profile from './Component/Home/Profile/Profile';
import Footer from './Component/Home/Footer/Footer';   
import Aboutus from './Component/Home/Footer/Aboutus';

 




const particlesOptions= {
                particles: {
                  number:{
                   value: 150,
                   density: {
                    enable: true,
                    value_area: 800
                   } 
                  } 
                }              
    }

const initialState = {
      route: 'signin' ,
      isSignedIn: '' ,
      user: {
          id: '' , 
          roll: '' ,
          first_name: '' ,
          last_name: '' ,
          series: '' ,
          dept: '' ,
          email: '' ,
          joined: '' 
      }   ,
      profile: {
          Id: '' , 
          name: '' ,
          pass_year: '' ,
          workplace: ''  ,
          designation: '' ,
          present_address: '' ,
          permanent_address: '' ,
          Email: '' 
      }  
}

class App extends Component {
    constructor(){
      super();
      this.state = initialState ; 
    }

  loadUser= (data) => {
    this.setState({user: {
        id: data.id , 
        roll:  data.roll,
        first_name: data.first_name,
        last_name: data.last_name,
        series: data.series ,
        dept: data.dept ,
        email: data.email,
        joined: data.joined
    }})
  }

   loadProfile= (data) => {
    this.setState({profile: {
        Id: data.id , 
        name: data.name,
        pass_year: data.pass_year,
        workplace: data.workplace,
        designation: data.designation,
        present_address: data.present_address,
        permanent_address: data.permanent_address,  
        Email: data.email
    }})
  }


  

onRouteChange = (route) => {
  if (route === 'signout') {
   this.setState(initialState)
}else if (route === 'scroll'){
   this.setState({isSignedIn: 'login'})
 }else if (route === 'home'){
   this.setState({isSignedIn: 'logout'})
  }else if (route === 'profile'){
    this.setState({isSignedIn: 'profile'})
  }
  this.setState({route: route}) ;
}

 

  render() {
    const { isSignedIn ,route ,profile, user} = this.state ;

    return (
       
      <div className="App">
           <Particles className='particles'
              params={particlesOptions}
            />
           <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
           <Logo/>
   

          { route === 'home' 
            ? <div>
                <h1 className= 'tc dim pointer f1 pa1 br-2 ' >RUETians</h1>

                <Rank 
                    first_name = {user.first_name}
                    last_name = {user.last_name}  
                    roll = {user.roll}
                    series = {user.series}
                    dept = {user.dept}
                    pass_year = {profile.pass_year}
                    workplace = {profile.workplace}
                    designation = {profile.designation}
                    present_address = {profile.present_address}
                    permanent_address = {profile.permanent_address}
                    email = {user.email}
                /> 

              </div>
           :  (route === 'scroll' 
           ?   <SearchBox   Roll = {user.roll}/>
           :  (route === 'footer' 
           ?    <Aboutus />
           : (route === 'profile' 
           ?   <Profile onRouteChange={this.onRouteChange} />
           : (route === 'signin'
           ?   <Signin loadUser = {this.loadUser} onRouteChange={this.onRouteChange} loadProfile={this.loadProfile}/>
           :   <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange}/>
           )
     ) 
       )
        )
      }

         <Footer onRouteChange = {this.onRouteChange} />

    </div>
    );
  }
}

export default App;







        