import { useState } from "react";
import Image from "next/image";

import logos from "../../../../public/logos.jpg";
import close from "../../../../public/close.svg";
import menu2 from "../../../../public/menu2.svg";
import mark from "../../../../public/mark.svg";

import { navLinks } from "../../../../constants";

type Props = {};

const Navbar = (props: Props) => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<Image src={logos} alt="logo" className="w-[80px] h-[52px]" />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							active === nav.title ? "text-white" : "text-dimWhite"
						} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
						onClick={() => setActive(nav.title)}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<Image
					src={!toggle ? menu2 : close}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins font-medium cursor-pointer text-[16px] ${
									active === nav.title ? "text-white" : "text-dimWhite"
								} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
