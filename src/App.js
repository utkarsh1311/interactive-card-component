import CardFront from "./assets/images/bg-card-front.png";
import CardBack from "./assets/images/bg-card-back.png";
function App() {
	return (
		<main className="grid grid-rows-3 text-gray-50 tracking-wider font-space-grotesk h-screen">
			<div className="bg-card-bg-image-mobile w-full">
				<div className="w-3/4 relative top-8 float-right right-5">
					<img
						src={CardBack}
						alt="card-back"
					/>
					<p className="text-xs top-[68px] right-10 absolute">000</p>
				</div>
				<div className="flex drop-shadow-2xl w-3/4 left-5 relative bottom-9">
					<img
						src={CardFront}
						alt="card-front"
					/>
					<div className="absolute w-full flex flex-col justify-between h-full p-4">
						<div className="flex items-center gap-2">
							<div className="h-7 bg-white w-7 rounded-full"></div>
							<div className="border-2 border-solid border-white h-4 w-4 rounded-full"></div>
						</div>
						<div className="">
							<p className="text-xl ">0000 0000 0000 0000</p>
							<div className="text-[0.6rem] font-thin mt-4 flex justify-between">
								<p className="">JANE APPLESEED</p>
								<p className="">00/00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<form
				className="row-span-2 bg-red-200"
				action="
			"></form>
		</main>
	);
}

export default App;
