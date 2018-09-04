import ReduxCartError from './ReduxCartError';

/**
 * 
 * @param {Number} val 
 * @param {Number} val1
 * Substract using the minimum number as zero.
 * (Natural Numbers Set)
 * If some substraction is less than zero
 * then the function returns zero.
 *
 */
export function subtractNaturalSet(a, b) {
	const parsedA = parseInt(a);
	const parsedB = parseInt(b);

	if (isNaN(parsedA)) {
		throw new ReduxCartError(`${a} is not a valid number.`);
	}

	if (isNaN(parsedB)) {
		throw new ReduxCartError(`${b} is not a valid number.`);
	}

	return (parsedA - parsedB) < 0 ? 0 : (parsedA - parsedB);
}
