import React from 'react';
import Nav from './Nav';

function Header() {
	return (
		<header className='fixed top-0 left-0 w-full bg-header z-10 animate-slideDown'>
			<Nav />
		</header>
	);
}

export default Header;
