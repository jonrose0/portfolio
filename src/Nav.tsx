import React from 'react';

function Nav() {
	return (
		<nav className='nav'>
			<ul className='nav__list flex justify-end px-8'>
				<li className='nav__list-item'>
					<a
						className='nav__list-link block font-bold uppercase p-8 opacity-0 animate-[slideLeft_.5s_ease_.5s_forwards] hover:bg-hover'
						href='#about'
					>
						About
					</a>
				</li>
				<li className='nav__list-item'>
					<a
						className='nav__list-link block font-bold uppercase p-8 opacity-0 animate-[slideLeft_.5s_ease_.7s_forwards] hover:bg-hover'
						href='#portfolio'
					>
						Portfolio
					</a>
				</li>
				<li className='nav__list-item'>
					<a
						className='nav__list-link block font-bold uppercase p-8 opacity-0 animate-[slideLeft_.5s_ease_.9s_forwards] hover:bg-hover'
						href='#contact'
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
