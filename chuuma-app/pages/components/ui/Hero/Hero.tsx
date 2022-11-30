import Image from "next/image";
import styles from "../../../../styles/styles";
import robot from "../../../../public/robot.jpg";
import windows from "../../../../public/windows.jpeg";
import hero2 from "../../../../public/hero2.jpeg";
import balcon from "../../../../public/balcon.jpeg";
import SocialContacts from "../SocialContacts/SocialContacts";

interface HeroProps {}

const Hero = () => {
	return (
		<>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className="flex flex-row justify-between w-full">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[20px] text-[20px] ss:leading-[100.8px] leading-[20px]">
						<span className="text-gradient"> Wabigalo Mityana</span>{" "}
					</h1>
				</div>
				<div className="">
					<p className={` ${styles.paragraph} max-w-[100%] mt-5`}>
						We make Aluminum doors and windows ,steal doors and windows, roller
						shutters,balconies, beds, school desks etc.
					</p>
					<h1 className="text-[18px] pt-4 pb-3">
						Contact us on 0705621018 / 0781602071
					</h1>
				</div>
			</div>

			<section
				id="home"
				className={`flex flex-col md:flex-row  ${styles.paddingY}`}
			>
				{/* <div
					className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}> */}
				{/* <div className="flex flex-row justify-between items-center w-full">
						<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
							<span className="text-gradient">Chuuma Fubricators</span>{" "}
						</h1>
					</div> */}
				{/* <div>
						<h1 className="font-poppins font-semibold ss:text-[68px] text-[30px] text-red ss:leading-[100.8px] leading-[75px] w-full">
							Wabigalo Mityana
						</h1>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
							Our team of skilled and qualified engineers uses modern
							technologies to provide you with quality, reliable, durable but
							pocket friendly metal products.
						</p> */}
				{/* <h1 className="text-[18px] pt-4 pb-3">Contact us</h1> */}
				{/* <SocialContacts /> */}
				{/* </div> */}
				{/* </div> */}

				<div
					className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
				>
					<Image
						src={windows}
						alt="billing"
						className="w-[90%] h-[90%] relative z-[5] rounded-2xl"
					/>

					{/* gradient start */}
					<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
					<div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
					<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
					{/* gradient end */}
				</div>
			</section>
			<div>
				<p className="text-[25px] pt-4 pb-3 text-center">
					Our experienced and highly skilled Technical team are always there to
					provide you with quality products that fit your dreams.
					<p>Contact us on 0705621018 / 0781602071</p>
				</p>
				<SocialContacts />
			</div>
		</>
	);
};
export default Hero;
