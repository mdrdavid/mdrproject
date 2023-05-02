import React from "react";
import { Navbar } from "../components";
import {ContactUs} from "../components";

type Props = {};

function ContactUsPage({}: Props) {
	return (
		<div>
			<Navbar />
			<ContactUs/>
		</div>
	);
}

export default ContactUsPage;
