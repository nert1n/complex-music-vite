export const useCryptoRandom = ({ max, min }: { min: number; max: number }) => {
	const random = crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000;
	return Math.floor(random * (max - min + 1)) + min;
};
