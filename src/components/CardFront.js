/*eslint-disable*/
import cardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg";
import { useSpring, animated } from "@react-spring/web";

const CardFront = ({ name, number, expMonth, expYear }) => {
	const props = useSpring({
		from: { transform: "translate(-100%,0)" },
		to: { transform: "translate(0%,0)" },
		config: { duration: 600 },
	});
	return (
		<animated.div
			style={props}
			className="flex drop-shadow-2xl w-3/4 left-5 relative bottom-9 md:w-1/2 md:top-1/2 md:left-32 lg:w-full lg:top-4 lg:left-20 xl:-top-14">
			<img
				src={cardFront}
				alt="card-front"
			/>
			<div className="absolute w-full flex flex-col justify-between h-full p-4 tracking-widest md:p-6">
				<div className="flex items-center gap-2">
					<img
						className="w-16 md:w-20 lg:w-16"
						src={cardLogo}
						alt="card logo"
					/>
				</div>
				<div className="">
					<p className="text-xl md:text-[1.7rem] lg:text-[1.5rem]">
						{number ? number : "1234 5678 9123 0000"}
					</p>
					<div className="text-[0.6rem] font-thin mt-4 flex justify-between md:text-xs">
						<p className="uppercase lg:text-xs">
							{name ? name : "Jane Appleseed"}
						</p>
						<p className="md:text-xs">
							{expMonth ? expMonth : "MM"}/
							{expYear ? expYear : "YY"}
						</p>
					</div>
				</div>
			</div>
		</animated.div>
	);
};

export default CardFront;
