/*eslint-disable*/
import cardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";

const CardFront = ({ name, number, expMonth, expYear }) => {
	return (
		<div className="flex drop-shadow-2xl w-3/4 left-5 relative bottom-9">
			<img
				src={cardFront}
				alt="card-front"
			/>
			<div className="absolute w-full flex flex-col justify-between h-full p-4">
				<div className="flex items-center gap-2">
					<img className="w-16" src={cardLogo} alt="card logo" />
				</div>
				<div className="">
					<p className="text-xl ">{number}</p>
					<div className="text-[0.6rem] font-thin mt-4 flex justify-between">
						<p className="uppercase">{name}</p>
						<p className="">
							{expMonth}/{expYear}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardFront;
