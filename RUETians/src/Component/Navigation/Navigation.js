import React from 'react';
import home from './home.png';
import profile from './profile.png';

const Navigation = ({ onRouteChange ,isSignedIn}) =>{
  if (isSignedIn === 'login') {
  	return ( 
		<nav style={{display:'flex',justifyContent: 'flex-end'}} >
		<p onClick={() => onRouteChange('home')}
		  className='f5 link dim black underline pa3 pointer'>
         <img src={profile} className="dib w2 h2 br-100" alt = 'profile'  title="profile" />
		  profile</p>  

		 <p onClick={() => onRouteChange('signout')}
		  className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		);
      } 
   	else if(isSignedIn === 'logout') {
  	return ( 
     
       <nav style={{display:'flex',justifyContent: 'flex-end'}} >
        <p onClick={() => onRouteChange('profile')}
		  className='f3 link dim black underline pa3 pointer flex items-start'>Edit Profile</p>
		
		 <p onClick={() => onRouteChange('scroll')}
		  className='f5 link dim black underline pa3 pointer'>
          <img src={home} className="dib w2 h2 br-100" alt = 'home'  title="home" />
		  Home</p> 
			 <p onClick={() => onRouteChange('signout')}
		  className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		
		);
  }
   	else if(isSignedIn === 'profile') {
  	return ( 
     
       <nav style={{display:'flex',justifyContent: 'flex-end'}} >
		 <p onClick={() => onRouteChange('scroll')}
		  className='f5 link dim black underline pa3 pointer'>
          <img src={home} className="dib w2 h2 br-100" alt = 'home'  title="home" />
		  Home</p> 
			 <p onClick={() => onRouteChange('signout')}
		  className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		
		);
  }
    

  else{
    return (
	  	<nav style={{display:'flex',justifyContent: 'flex-end'}} >
			  <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
			  <p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
		</nav>
		);
  }
}

export default Navigation;



