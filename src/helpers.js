/**
 * 
 * @param {Number} a
 * @param {Number} b
 * Substract using the minimum number as zero.
 * (Natural Numbers Set)
 * If some substraction is less than zero
 * then the function returns zero.
 *
 */
export function subtractNaturalSet(a, b) {
	let parsedA = typeof a === 'string' ? parseInt(a) : a;
	let parsedB = typeof b === 'string' ? parseInt(b) : b;
	if (isNaN(parsedA) || isNaN(parsedB)) {
		throw `redux-cart Error: One of two values is not a number.\nReceived:\n${parsedA}\n${parsedB}`;
	}
	return (parsedA - parsedB) < 0 ? 0 : (parsedA - parsedB);
}
