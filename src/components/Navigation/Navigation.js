import React from 'react';
import './Navigation.css';

const Navigation = () => {
	return (
		<nav className="nav-bar">
			<h1 className="logo">TaskIT</h1>
			<ul className="main-nav link dim pointer">
				<li>Log Out</li>
			</ul>
		</nav>
	)
}

export default Navigation;