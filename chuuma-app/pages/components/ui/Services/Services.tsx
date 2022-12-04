import React from "react";
import styles from "../../../../styles/styles";

type Props = {};

function Services({}: Props) {
	return (
		<div className="flex flex-col sm:flex-row w-full gap-x-[20px]">
			<div className="w-[100%] bg-cyan-900 border mr-10 p-10 rounded">
				<h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[25px] text-red-400 ss:leading-[100.8px] leading-[30px]">
					Our Location
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white font-medium text-[20px]`}
				>
					We are located in Wabigalo Mityana Opposite Wabigalo Market along
					Mityana Kampala Highway
				</p>
			</div>
			<div className="w-[100%] h-[100%] bg-sky-900 border p-10 rounded-[10px]">
				<h2 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[25px] text-red-400 ss:leading-[100.8px] leading-[30px]">
					Other Services
				</h2>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white text-[20px] font-medium`}
				>
					We provide Metal welding practical training to the youth; and find for
					them places of work after the training{" "}
				</p>
				<p
					className={`${styles.paragraph} max-w-[470px] mt-1 text-white text-[20px]`}
				>
					Book for Training: 0705621018 or 0781602071{" "}
				</p>
			</div>
		</div>
	);
}
export default Services;
