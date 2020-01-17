import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
			<div className='pa2'>
				<input type='search'
				 aria-label='Search Robots'
				 className='pa3 ba b--green bg-lightest-blue' 
			 	 placeholder='search robots'
			 	 onChange={searchChange} 
			 />
			 </div>

		);

}

export default SearchBox;
