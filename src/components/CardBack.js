/*eslint-disable*/
import cardBack from "../assets/images/bg-card-back.png";
import { useSpring, animated } from "@react-spring/web";

const CardBack = ({ cvv }) => {
	const props = useSpring({
		from: { transform: "translate(100%,0)" },
		to: { transform: "translate(0%,0)" },
		config: { duration: 600 },
	});
	return (
		<animated.div
			style={props}
			className="w-3/4 relative top-8 float-right right-5 md:w-1/2 md:right-32">
			<img
				src={cardBack}
				alt="card-back"
			/>
			<p className="text-xs top-[68px] right-10 absolute md:top-[5.6rem] md:text-lg">
				{cvv ? cvv : "000"}
			</p>
		</animated.div>
	);
};

export default CardBack;
