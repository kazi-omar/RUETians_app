import React from 'react';
 
const Rank = ({ first_name, last_name, roll , series, dept , pass_year , workplace , present_address, permanent_address , email, designation}) =>{
	return ( 
   
	<article className="dib br3 pa3 ma2 grow bw2 shadow-5">
  <div className="tc">
    <h1 className="f3 mb2 dark-red b">{roll} </h1>
    <img alt='robots' src={`https://robohash.org/${roll}?200x200`} className="bg-near-white br-100 h4 w4 dib ba b--black-05 pa2" title={first_name} />
    <hr className="mw3 bb bw1 b--black-10" />
    <h1 className="f3 mb2 dark-blue">{`${first_name} ${last_name} `}</h1>
    <h4 className="f4 fw6">{`${series} Series`}</h4>
    <h2 className="f4 fw6 black mt0">{`department of  ${dept} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Pass year:  ${pass_year} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Workplace:  ${workplace} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Designation:  ${designation} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Present address:  ${present_address} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Permanent address:  ${permanent_address} `} </h2>
    <h2 className="f4 fw4 black mt0">{`Email:  ${email} `} </h2>
    <hr className="mw3 bb bw1 b--black-10" />
   </div>
 </article>

	);
}

export default Rank;

