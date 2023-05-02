import React from "react";
import { Footer, Navbar } from "../components";
import ServicesContainer from "../components/ui/Services/Services"

type Props = {};

function Services({}: Props) {
	return (
		<div>
			<Navbar />
			<ServicesContainer/>
			<Footer/>
		</div>
	);
}

export default Services;
