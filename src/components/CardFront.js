/*eslint-disable*/
import cardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";

const CardFront = ({ name, number, expMonth, expYear }) => {
	return (
		<div className="flex drop-shadow-2xl w-3/4 left-5 relative bottom-9 lg:left-44 lg:bottom-24">
			<img
				src={cardFront}
				alt="card-front"
			/>
			<div className="absolute w-full flex flex-col justify-between h-full p-4 lg:p-6 tracking-widest">
				<div className="flex items-center gap-2">
					<img
						className="w-16"
						src={cardLogo}
						alt="card logo"
					/>
				</div>
				<div className="">
					<p className="text-xl lg:text-2xl">
						{number ? number : "1234 5678 9123 0000"}
					</p>
					<div className="text-[0.6rem] font-thin mt-4 flex justify-between">
						<p className="uppercase">
							{name ? name : "Jane Appleseed"}
						</p>
						<p className="">
							{expMonth ? expMonth : "MM"}/
							{expYear ? expYear : "YY"}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardFront;
