import React from 'react';
 
const Footer = ({onRouteChange}) =>{
	return ( 
      
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
		  <small className="f6 db tc">© 2018 <b className="ttu">RUETians Inc</b>., All Rights Reserved</small>
		  <div className="tc mt3">
            <a onClick = { () => onRouteChange('footer')}  title="about us" className="f5 dib ph2 link mid-gray grow b pointer">about us</a>
          </div>
      </footer>


	);
}

export default Footer;







