import React from 'react';
import ruet from './ruet.jpeg' ;
 
const Footer = ({onRouteChange}) =>{
	return ( 
      
<article className="pa3 pa5-ns">
  <h1 className="f2">RUETians</h1>
  <img src={ruet}  className="w-100 f5 measure" alt="ruet gate" title="RUET gate" />
  <div className=" db dtc-ns v-mid ph2 pr0-ns pl3-ns">

  <p className = "dark-green f3 b" >
     The site “RUETians” will provide a common platform for all 
     the current and graduated students of 
     Rajshahi University of Engineering and Technology 
	 as well as all the respected faculties of this institution.
  </p>
  <p className = "dark-green f3 b" >
     After graduation, all the graduates eventually find their
     respective place in various workplaces across the world. 
	 Any past graduate’s experiences regarding their work field, 
	 different jobs and job providers and even about going abroad
	 for higher studies can be invaluable knowledge to any fresh graduate and current students. 
  </p>

  <p className = "dark-green f3 b" >
     Advices and recommendations from the respected faculties are greatly 
     useful to students and graduates in academic and professional life.
	 Being a member of the same educational institution is quite helpful
	 when seeking knowledge and help regarding such matters.
  </p>

  </div>

</article>


	);
}

export default Footer;