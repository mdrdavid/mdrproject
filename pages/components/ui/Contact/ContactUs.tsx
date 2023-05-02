import Image from "next/image";
import styles from "../../../../styles/styles";
import uparrow from "../../../../public/uparrow.svg";
import contactus from "../../../../public/contactus.jpg";

const ContactUs = () => (
	<div
		id="home"
		className={`block  ${styles.paddingY}`}
		style={{
			backgroundImage: `url(${contactus.src})`,
			width: "100%",
			height: "100%",
			borderRadius: "20px",
			backgroundRepeat: "repeat-x",
		}}
	>
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
		{/* </div> */}
				<h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[25px] text-red-400 ss:leading-[100.8px] leading-[30px]">
					Our Location
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white font-medium text-[20px]`}
				>
					We are located in Wabigalo Mityana Uganda Opposite Wabigalo Market along
					Mityana Kampala Highway
				</p>
			{/* </div> */}
			
	</div>
	
);

export default ContactUs;
