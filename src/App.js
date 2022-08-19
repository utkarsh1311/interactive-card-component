import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CardForm from "./components/CardForm";

const App = () => {
	return (
		<main className="grid grid-rows-3 text-gray-50 tracking-wider font-space-grotesk h-screen">
			<div className="bg-card-bg-image-mobile w-full">
				<CardBack />
				<CardFront />
			</div>
			<div className="row-span-2 pt-20 rounded-lg  text-black px-5">
				<CardForm />
			</div>
		</main>
	);
};

export default App;
