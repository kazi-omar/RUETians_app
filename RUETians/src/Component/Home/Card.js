import React from 'react';

const Card = (props) => {
	const {first_name, last_name, email, roll, dept, series, onRouteChange, onEmailChange, onSeriesChange, onDeptChange, onRollChange } = props; 
	return(
		<article className="dib br3 pa3 ma2 grow bw2 shadow-5">
  <div className="tc">
      <h1 className="f3 mb2 dark-red">{roll} </h1>
      <img alt='robots' src={`https://robohash.org/${roll}?200x200`} className="bg-near-white br-100 h4 w4 dib ba b--black-05 pa2" title={first_name} />
      <hr className="mw3 bb bw1 b--black-10" />
      <h1 className="f3 mb2 dark-blue">{first_name} </h1>
      <h4 className="f4 fw6">{`${series} Series`}</h4>
      <h2 className="f4 fw6 black mt0">{`department of  ${dept} `} </h2>
       <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f5 pointer br1"
        onClick ={(event) => { onSeriesChange(series);
                               onDeptChange(dept); 
                               onRollChange(roll); 
                               onEmailChange(email); 
                               onRouteChange('info');} }
        title={last_name} >
        {`about ${first_name} `}
      </a>
  </div>
</article>
		
		);
}
export default Card;



