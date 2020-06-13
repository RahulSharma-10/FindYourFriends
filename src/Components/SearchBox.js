import React from 'react';

const SearchBox = ({SearchBox, searchChange}) => {
	return(
		<div className='pa2'>
		<input 
		  className='pa3 ba b--green bg-lightest-blue' 
		  type='search' 
		  placeholder='Search your friends' 
		  onChange= {searchChange}
		/>
		</div>
	);
}

export default SearchBox;