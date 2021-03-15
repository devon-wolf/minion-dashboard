import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css' 

export default class Header extends Component {
	render() {
		return (
			<header>
				<h1>Header</h1>

				<nav>
					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/">
						Home
					</NavLink>

					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/login">
						Login
					</NavLink>

					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/list">
						List
					</NavLink>

					<NavLink 
						exact 
						activeClassName={style.current} 
						className={style.navItem} 
						to="/new">
						New Entry
					</NavLink>

					<span className={style.logout} onClick={this.props.handleLogoutClick}>Logout</span>
				</nav>
			</header>
		)
	}
}
