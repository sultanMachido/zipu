export const apiErrors = (errorObj) => {
	for (let err in errorObj) {
		return errorObj[err][0];
	}
};

export const getAPIError = (err) => {
	if (err.length === 1) {
		return err;
	} else {
		let error = Object.values(err);
		let errArrayFlat = error.flat();
		let errMessage = errArrayFlat.join('');
		return errMessage;
	}
};
