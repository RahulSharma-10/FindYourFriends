import React from 'react';

const Card = (props) => {
	const { name, email, id} = props;
	return(

		<div className=' tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`http://lorempixel.com/300/300/people/${id}`} alt='photo' />
		<div>
		<h2> {name} </h2>
		<h3>  {email} </h3>
		</div>
		</div>

		);
}

export default Card;