import styles from "../styles/styles";
import {
	Billing,
	Business,
	CardDeals,
	Clients,
	CTA,
	Footer,
	Hero,
	Navbar,
	Starts,
	Testimonials,
} from "./components";

export default function Home() {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Starts />
					<Business />
					<Billing />
					<CardDeals />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	);
}
