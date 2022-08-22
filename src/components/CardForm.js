/*eslint-disable*/
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const CardForm = ({
	name,
	updateName,
	number,
	updateCardNumber,
	cvv,
	updateCVV,
	expMonth,
	updateExpiryMonth,
	expYear,
	updateExpiryYear,
	submitForm,
}) => {
	const [flip, set] = useState(false);
	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reverse: flip,
		delay: 400,
	});

	return (
		<animated.form
			style={props}
			onSubmit={submitForm}
			className="w-full flex flex-col gap-6 lg:w-1/3 lg:gap-4"
			action="
			">
			<div>
				<label
					className="text-sm text-[#21092f]"
					htmlFor="name">
					CARDHOLDER NAME
				</label>
				<input
					minLength={5}
					pattern="[A-Za-z ]+"
					required
					value={name}
					onChange={updateName}
					placeholder="e.g. Jane Appleseed"
					type="text"
					name="name"
					className=" form-input mt-2 w-full"
				/>
			</div>
			<div>
				<label
					className="text-sm text-[#21092f]"
					htmlFor="number">
					CARD NUMBER
				</label>
				<input
					required
					id="number"
					minLength={16}
					value={number}
					onChange={updateCardNumber}
					className="form-input  mt-2  w-full"
					placeholder="e.g. 1234 5678 9123 0000"
					type="text"
					name="number"
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
							required
							value={expMonth}
							onChange={updateExpiryMonth}
							className="form-input mt-2"
							placeholder="MM"
							type="number"
							name="expMonth"
						/>
						<input
							required
							value={expYear}
							name="expYear"
							onChange={updateExpiryYear}
							type="number"
							className="mt-2  form-input"
							placeholder="YY"
						/>
					</div>
				</div>
				<div className="col-span-1">
					<label
						className="text-sm text-[#21092f]"
						htmlFor="cvv">
						CVV
					</label>
					<input
						id="cvv"
						required
						value={cvv}
						onChange={updateCVV}
						placeholder="e.g. 123"
						className=" mt-1 w-full form-input"
						type="number"
						name="cvv"
					/>
				</div>
			</div>
			<button
				type="submit"
				className="w-full h-14 rounded-lg bg-[#21092f] text-xl text-white">
				Confirm
			</button>
		</animated.form>
	);
};

export default CardForm;
