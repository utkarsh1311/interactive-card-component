/*eslint-disable*/

import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";
import CardForm from "./components/CardForm";
import { useState } from "react";
import Confirmation from "./components/Confirmation";
const App = () => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [expMonth, setExpMonth] = useState();
	const [expYear, setExpYear] = useState();
	const [cvv, setCvv] = useState("");
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

	const submitForm = e => {
		e.preventDefault();
		setSubmitted(true);
	};

	const resetForm = () => {
		setCvv("");
		setName("");
		setNumber("");
		setExpMonth("");
		setExpYear("");
		setSubmitted(false);
	};

	return (
		<main className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 text-gray-50 tracking-wider font-space-grotesk h-screen">
			<div className="bg-card-bg-image-mobile lg:bg-card-bg-image-desktop lg:bg-cover w-full">
				<CardBack cvv={cvv} />
				<CardFront
					name={name}
					number={number}
					expMonth={expMonth}
					expYear={expYear}
				/>
			</div>
			<div className="row-span-2 pt-20 rounded-lg lg:col-span-2 lg:flex lg:justify-center lg:items-center lg:pt-0  text-black px-5">
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
						submitForm={submitForm}
					/>
				) : (
					<Confirmation resetForm={resetForm} />
				)}
			</div>
		</main>
	);
};

export default App;
