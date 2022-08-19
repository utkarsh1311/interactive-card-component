import cardBack from "../assets/images/bg-card-back.png";

const CardBack = () => {
	return (
		<div className="w-3/4 relative top-8 float-right right-5">
			<img
				src={cardBack}
				alt="card-back"
			/>
			<p className="text-xs top-[68px] right-10 absolute">000</p>
		</div>
	);
};

export default CardBack;