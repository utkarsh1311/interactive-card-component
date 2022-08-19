import cardFront from "../assets/images/bg-card-front.png";

const CardFront = () => {
	return (
		<div className="flex drop-shadow-2xl w-3/4 left-5 relative bottom-9">
			<img
				src={cardFront}
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
	);
};

export default CardFront;
