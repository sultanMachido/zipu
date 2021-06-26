import { APIService } from '../../../config/apiConfig';
import {
	businessDetailsTypesError,
	businessDetailsTypesLoading,
	businessDetailsTypesSuccess,
	clearBusinessDetailsTypesErrors
} from './businessDetails.actionCreators';

const SOMETHING_WENT_WRONG = 'Something went wrong';

export const submitBusinessDetails = (businessDetails) => async (dispatch) => {
	dispatch(clearBusinessDetailsTypesErrors());
	dispatch(businessDetailsTypesLoading());
	try {
		const businessDetailsRequest = await APIService.post('/bank-policy-update', {
			...businessDetails
		});
		if (businessDetailsRequest.data.status === 'Success') {
			dispatch(businessDetailsTypesLoading());
			dispatch(businessDetailsTypesSuccess(businessDetailsRequest.data));
			return {
				businessDetailsStatus: true,
				tokenValid: true,
				message: 'Successfully submitted business details'
			};
		} else {
			dispatch(businessDetailsTypesLoading(false));
			return { businessDetailsStatus: false, message: SOMETHING_WENT_WRONG };
		}
	} catch (error) {
		const message = error.response?.data?.message;
		dispatch(businessDetailsTypesError(message));
		dispatch(businessDetailsTypesLoading(false));
		return { businessDetailsStatus: false, message: message || SOMETHING_WENT_WRONG };
	}
};
