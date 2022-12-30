import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/nav.css";

function Navbar(props) {
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	return (
		<header>
		<h3>LOGO</h3>
		<nav ref={navRef}>
			<a href="/#" className="hover-underline-animation">Ana səyfə</a>
			<a href="/#" className="hover-underline-animation">Qadın</a>
			<a href="/#" className="hover-underline-animation">Kişi</a>
			<a href="/#" className="hover-underline-animation">Alış</a>
			<a href="/#" className="hover-underline-animation">Mağaza</a>
			<a href="/#" className="hover-underline-animation">Səhifələr</a>
			<a href="/#" className="hover-underline-animation">Blog</a>
			<a href="/#" className="hover-underline-animation">Contact</a>
			<div className="right">
				<a href="/#" className="login">Login / register</a>
				<div className='input-searh'>
					<input className='' name='search' onChange={props.handleChanger}></input>
					<i className="fa-solid fa-magnifying-glass search-into-input"></i>
				</div>
				<i class="fa-solid fa-heart"></i>
				<i class="fa-solid fa-clipboard-list"></i>
			</div>
			<button className="nav-btn nav-close-btn" onClick={showNavbar}>
				<FaTimes />
			</button>
		</nav>
		<button className="nav-btn" onClick={showNavbar}>
			<FaBars />
		</button>
	</header>
	);
}

export default Navbar;
