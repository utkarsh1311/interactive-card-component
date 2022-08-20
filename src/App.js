/*eslint-disable*/

import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CardForm from "./components/CardForm";
import { useState } from "react";
import Confirmation from "./components/Confirmation";
const App = () => {
	const [name, setName] = useState("Jane Appleseed");
	const [number, setNumber] = useState("0000000000000000");
	const [expMonth, setExpMonth] = useState("MM");
	const [expYear, setExpYear] = useState("YY");
	const [cvv, setCvv] = useState("000");
	const [submitted, setSubmitted] = useState(false);

	const updateCardNumber = e => {
		if (e.target.value.length <= 16) setNumber(e.target.value);
	};

	const updateCVV = e => {
		if (e.target.value.length <= 3) setCvv(e.target.value);
	};

	const updateName = e => {
		if (e.target.value.length <= 25) setName(e.target.value);
	};

	const updateExpiryMonth = e => {
		if (e.target.value.length <= 2) {
			setExpMonth(e.target.value);
		}
	};

	const updateExpiryYear = e => {
		if (e.target.value.length <= 2) {
			setExpYear(e.target.value);
		}
	};

	const resetForm = () => {
		setCvv("000");
		setName("Jane Appleseed");
		setNumber("0000000000000000")
		setExpMonth("MM")
		setExpYear("YY");
		setSubmitted(false);
	}

	return (
		<main className="grid grid-rows-3 text-gray-50 tracking-wider font-space-grotesk h-screen">
			<div className="bg-card-bg-image-mobile w-full">
				<CardBack cvv={cvv} />
				<CardFront
					name={name}
					number={number}
					expMonth={expMonth}
					expYear={expYear}
				/>
			</div>
			<div className="row-span-2 pt-20 rounded-lg  text-black px-5">
				{!submitted ? (
					<CardForm
						name={name}
						updateName={updateName}
						number={number}
						updateCardNumber={updateCardNumber}
						cvv={cvv}
						updateCVV={updateCVV}
						expMonth={expMonth}
						updateExpiryMonth={updateExpiryMonth}
						expYear={expYear}
						updateExpiryYear={updateExpiryYear}
						submitForm={setSubmitted}
					/>
				) : (
					<Confirmation resetForm={resetForm}/>
				)}
			</div>
		</main>
	);
};

export default App;
