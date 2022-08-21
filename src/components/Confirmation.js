/*eslint-disable*/
import confirmIcon from "../assets/images/icon-complete.svg";

const Confirmation = ({ resetForm }) => {
	return (
		<div className=" font-space-grotesk flex flex-col justify-center items-center text-center">
			<img
				className=""
				src={confirmIcon}
				alt=""
			/>
			<h2 className="mt-8 text-[#21092f] text-3xl font-semibold">
				THANK YOU!
			</h2>
			<p className=" text-gray-500 my-4">
				We have added your card details
			</p>
			<button
				onClick={resetForm}
				className="w-full mt-4 h-14 rounded-lg bg-[#21092f] text-xl text-white">
				Continue
			</button>
		</div>
	);
};

export default Confirmation;
