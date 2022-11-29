import { stats } from "../../../../constants";
import styles from "../../../../styles/styles";
import Image from "next/image";

const Stats = () => (
	<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className={`flex justify-start items-center flex-col flex-wrap m-3 border  `}
			>
				<Image
					src={stat.img}
					alt="discount"
					className="w-[400px] h-[400px] rounded-full"
				/>
				<h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-purple">
					{stat.title}
				</h4>
				<p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
					{stat.contact}
				</p>
			</div>
		))}
	</section>
);
export default Stats;
