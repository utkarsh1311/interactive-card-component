import CardFront from "./assets/images/bg-card-front.png";
import CardBack from "./assets/images/bg-card-back.png";

const App = () => {
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
			<div className="row-span-2 pt-20 rounded-lg  text-black px-5">
				<form
					className="w-full flex flex-col gap-6"
					action="
			">
					<div>
						<label
							className="text-sm text-[#21092f]"
							htmlFor="cardholder name">
							CARDHOLDER NAME
						</label>
						<input
							placeholder="e.g. Jane Appleseed"
							type="text"
							name="cardholder name"
							id="name"
							className="rounded-lg border-[1px] px-3 border-gray-300 border-solid mt-2 h-10 w-full"
						/>
					</div>
					<div>
						<label
							className="text-sm text-[#21092f]"
							htmlFor="number">
							CARD NUMBER
						</label>
						<input
							className="rounded-lg border-[1px] border-gray-300 border-solid px-3 mt-2 h-10 w-full"
							placeholder="e.g. 1234 5678 9123 0000"
							type="number"
							name="number"
							id="number"
						/>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div className="flex col-span-1 flex-col">
							<label
								className="text-sm text-[#21092f]"
								htmlFor="">
								EXP. DATE (MM/YY)
							</label>
							<div className="grid grid-cols-2 gap-2">
								<input
									className="rounded-lg border-[1px] border-gray-300 border-solid mt-2 px-3 h-10"
									placeholder="MM"
									type="text"
									name=""
									id=""
								/>
								<input
									type="text"
									className="mt-2 rounded-lg border-[1px] border-gray-300 border-solid px-3 h-10"
									placeholder="YY"
								/>
							</div>
						</div>
						<div className="col-span-1">
							<label
								className="text-sm text-[#21092f]"
								htmlFor="">
								CVC
							</label>
							<input
								placeholder="e.g. 123"
								className="h-10 mt-1 w-full border-[1px] border-gray-300 border-solid px-3 rounded-lg"
								type="number"
								name=""
								id=""
							/>
						</div>
					</div>
					<button className="w-full h-14 rounded-lg bg-[#21092f] text-xl text-white">
						Confirm
					</button>
				</form>
			</div>
		</main>
	);
};

export default App;
