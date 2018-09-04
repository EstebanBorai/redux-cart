class ReduxCartError extends Error {
	constructor(message) {
		super(message);
		this.name = 'redux-cart Error';
	}
}

export default ReduxCartError;
