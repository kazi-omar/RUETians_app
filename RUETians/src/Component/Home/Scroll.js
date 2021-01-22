import React from 'react';
import Cardlist from './Cardlist' ;


const Scroll = ({searchChange, filteredRobots})=>{
	return (
		<div>
		<input
		className='pa3 ba b--green bg-lightest-blue f5 w-25  '
		type='search' 
		placeholder='search by name/dept/series' 
		  onChange={searchChange}
                                
		/>
		<div style={{overflowY: 'scroll',border: '3px solid #9FB6CD',height: '500px'}}>
			<Cardlist robots={filteredRobots} />
		</div>
		</div>
		);
			
		
}
export default Scroll;








