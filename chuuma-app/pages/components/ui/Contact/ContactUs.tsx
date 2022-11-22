import Image from "next/image";
import styles from "../../../../styles/styles";
import uparrow from "../../../../public/uparrow.svg";

const ContactUs = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
	>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
		>
			<div className={`${styles.flexStart} flex-row`}>
				<p className="font-poppins font-medium text-[18px] leading-[23.4px]">
					<span className="text-gradient">Get</span>
				</p>
				<Image
					src={uparrow}
					alt="arrow-up"
					className="w-[23px] h-[23px] object-contain"
				/>
			</div>

			<p className="font-poppins font-medium text-[18px] leading-[23.4px]">
				<span className="text-gradient">Started</span>
			</p>
		</div>
	</div>
);

export default ContactUs;

// import React from 'react'

// type Props = {}

// function ContactUs({}: Props) {
//   return (
//     <div>ContactUs</div>
//   )
// }

// export default ContactUs
