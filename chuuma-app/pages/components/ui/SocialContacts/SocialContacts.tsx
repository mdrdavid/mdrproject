import Image from "next/image";

import { socialMedia } from "../../../../constants";

type Props = {};

function SocialContacts({}: Props) {
	return (
		<div className="flex flex-row md:mt-0 mt-6">
			{socialMedia.map((social, index) => (
				<Image
					key={social.id}
					src={social.icon}
					alt={social.id}
					className={`w-[21px] h-[21px] object-contain cursor-pointer ${
						index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
					}`}
					onClick={() => window.open(social.link)}
				/>
			))}
		</div>
	);
}
export default SocialContacts;
