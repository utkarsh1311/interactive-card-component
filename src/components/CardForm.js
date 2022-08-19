const CardForm = () => {
	return (
		<form
			className="w-full flex flex-col gap-6"
			action="
			">
			<div>
				<label
					className="text-sm text-[#21092f]"
					htmlFor="cardholder name">
					CARDHOLDER NAME
				</label>
				<input
					placeholder="e.g. Jane Appleseed"
					type="text"
					name="cardholder name"
					id="name"
					className="rounded-lg border-[1px] px-3 border-gray-300 border-solid mt-2 h-10 w-full"
				/>
			</div>
			<div>
				<label
					className="text-sm text-[#21092f]"
					htmlFor="number">
					CARD NUMBER
				</label>
				<input
					className="rounded-lg border-[1px] border-gray-300 border-solid px-3 mt-2 h-10 w-full"
					placeholder="e.g. 1234 5678 9123 0000"
					type="number"
					name="number"
					id="number"
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
							className="rounded-lg border-[1px] border-gray-300 border-solid mt-2 px-3 h-10"
							placeholder="MM"
							type="text"
							name=""
							id=""
						/>
						<input
							type="text"
							className="mt-2 rounded-lg border-[1px] border-gray-300 border-solid px-3 h-10"
							placeholder="YY"
						/>
					</div>
				</div>
				<div className="col-span-1">
					<label
						className="text-sm text-[#21092f]"
						htmlFor="">
						CVC
					</label>
					<input
						placeholder="e.g. 123"
						className="h-10 mt-1 w-full border-[1px] border-gray-300 border-solid px-3 rounded-lg"
						type="number"
						name=""
						id=""
					/>
				</div>
			</div>
			<button className="w-full h-14 rounded-lg bg-[#21092f] text-xl text-white">
				Confirm
			</button>
		</form>
	);
};

export default CardForm;