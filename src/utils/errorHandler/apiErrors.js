export const apiErrors = errorObj => {
	for (let err in errorObj) {
		return errorObj[err][0];
	}
};
