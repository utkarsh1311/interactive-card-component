/*eslint-disable*/
import cardBack from "../assets/images/bg-card-back.png";

const CardBack = ({ cvv }) => {
	return (
		<div className="w-3/4 relative top-8 float-right right-5 lg:top-1/2 lg:left-1/4 lg:drop-shadow-2xl">
			<img
				src={cardBack}
				alt="card-back"
			/>
			<p className="text-xs top-[68px] right-10 absolute lg:top-[5.2rem] lg:text-sm">
				{cvv ? cvv : "000"}
			</p>
		</div>
	);
};

export default CardBack;
