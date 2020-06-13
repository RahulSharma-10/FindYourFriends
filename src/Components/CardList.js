import React from 'react';
import Card from './card';
const CardList = ({ robots }) => {
	const cardArray = robots.map((user,i) => {
		return (<Card 
		 key={robots[i].id} 
		 id={robots[i].id} 
		 name={robots[i].name} 
		 email={robots[i].email}/>
		 )
	})
	return(
		<div>
		{cardArray}
   	</div>
		);

	
}

export default CardList;