export const InputSearch = () => {
	return (
		<input
			className="flex w-full min-w-[100px] max-w-[300px] rounded-[25px] bg-[#f1f1f1] py-3 pl-[55px] pr-6"
			placeholder="Search..."
			style={{
				backgroundImage: "url('/img/icons/loop.svg')",
				backgroundRepeat: "no-repeat",
				backgroundSize: "22px",
				backgroundPosition: "20px center",
			}}
			type="search"
		/>
	);
};
