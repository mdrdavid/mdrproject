import { Hero, Navbar } from "../../components";

type Props = {};

function Home({}: Props) {
	return (
		<>
			<Navbar />
			<Hero />
		</>
	);
}

export default Home;
