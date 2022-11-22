import Image from "next/image";
import styles from "../../../../styles/styles";
import discount from "../../../../public/Discount.jpg";
import robot from "../../../../public/robot.jpg";
import { ContactUs } from "../../../components";

interface HeroProps {}

const Hero = () => {
	return (
		<>
			<section
				id="home"
				className={`flex md:flex-row flex-col ${styles.paddingY}`}
			>
				<div
					className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
				>
					<div className=" hidden sm:flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
					<Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
					<p className={`${styles.paragraph} ml-2`}>
						<span className="text-white">20%</span> Discount For{" "}
						<span className="text-white">1 Month</span> Account
					</p>
				</div>

					<div className="flex flex-row justify-between items-center w-full">
						<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
							<span className="text-gradient">Chuuma Fubricators</span>{" "}
						</h1>
						<div className="ss:flex hidden md:mr-4 mr-0">
							<ContactUs />
						</div>
					</div>
					<div>
						<h1 className="font-poppins font-semibold ss:text-[68px] text-[30px] text-red ss:leading-[100.8px] leading-[75px] w-full">
							Wabigalo Mityana
						</h1>
						<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
							Our team of skilled and qualified engineers uses modern technologies to provide you with quality, reliable, durable but pocket friendly metal works.
						</p>
					</div>
				</div>

				<div
					className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
				>
					<Image
						src={robot}
						alt="billing"
						className="w-[100%] h-[100%] relative z-[5]"
					/>

					{/* gradient start */}
					<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
					<div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
					<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
					{/* gradient end */}
				</div>

				<div className={`ss:hidden ${styles.flexCenter}`}>
					<ContactUs />
				</div>
			</section>
		</>
	);
};
export default Hero;
