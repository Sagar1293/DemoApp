import { useToast } from 'vue-toastification';
import axios from '@/helpers/axios';
import { handleAPIError } from '@/helpers/functions.js';
import Swal from 'sweetalert2';

const toast = useToast();
export default {
	// verify email - check email
	verifyEmail: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/email', payload);
			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// verify - token
	verifyEmailToken: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/verify-user-token', payload);
			// loading - false
			commit('SET_LOADER', false, { root: true });

			// toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// register light enterpreneur ( job seeker )
	registerJobSeeker: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/add-seeker', payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close registration modal
			commit('SET_STATE', {
				action: 'isRegisterModelOpen',
				data: false,
			});

			toast.success(res.data.message); // success message

			// remove current registration detail
			localStorage.removeItem('current_registration');

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// register employeer ( company )
	registerEmployer: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/add-company', payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close registration modal
			commit('SET_STATE', {
				action: 'isRegisterModelOpen',
				data: false,
			});

			toast.success(res.data.message); // success message

			// remove current registration detail
			localStorage.removeItem('current_registration');

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// login ( company or seeker )
	login: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/signin', payload);
			// {
			// 	xsrfCookieName: 'csrftoken_testtest',
			// 	xsrfHeaderName: 'X-CSRFToken',
			// 	withCredentials: true,
			// }

			// Set accessToken
			localStorage.setItem('accessToken', res.data.token);

			// Update user details
			commit('SET_USER_INFO', res.data.data);

			// set user logged state
			commit('SET_STATE', { action: 'userLogged', data: true });
			commit('SET_STATE', { action: 'userLoggedNew', data: true });
			commit('SET_STATE', { action: 'empLogged', data: true });

			// set user type state
			commit('SET_STATE', {
				action: 'userType',
				data: res.data.data.user_type,
			});

			// Set bearer token in axios
			commit('SET_BEARER_TOKEN', res.data.token);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close login modal
			commit('SET_STATE', {
				action: 'isLoginModelOpen',
				data: false,
			});

			commit('SET_STATE', {
				action: 'isJobSeekerModelOpen',
				data: false,
			});
			//post gig login
			commit('SET_STATE', {
				action: 'isEmpLoginModelOpen',
				data: false,
			});

			commit('SET_STATE', {
				action: 'isLoginModelOpenProject',
				data: false,
			});

			commit('SET_STATE', {
				action: 'userProfile',
				data: res.data.data,
			});

			commit('SET_STATE', {
				action: 'seekForGig',
				data: false,
			});

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// set user logged state
			commit('SET_STATE', { action: 'userLogged', data: false });

			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// forgot password (send email)
	forgotPassword: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/user/forgot-password', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close login modal
			commit('SET_STATE', {
				action: 'isForgotPasswordModelOpen',
				data: false,
			});

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},
	// forgot password (send email)
	forgotPasswordRest: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/forgot-password/reset', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close login modal
			commit('SET_STATE', {
				action: 'isForgotPasswordModelOpen',
				data: false,
			});

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// user authrozed
	verifyToken: async ({ commit, dispatch }) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.get('/user/verify-token');

			// Update user details
			commit('SET_USER_INFO', res.data.data);

			// set user logged state
			commit('SET_STATE', { action: 'userLogged', data: true });
			commit('SET_STATE', { action: 'userLoggedNew', data: true });
			commit('SET_STATE', { action: 'empLogged', data: true });

			// set user type state
			commit('SET_STATE', {
				action: 'userType',
				data: res.data.data.user_type,
			});

			commit('SET_STATE', {
				action: 'userProfile',
				data: res.data.data,
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			// close login modal
			commit('SET_STATE', {
				action: 'isLoginModelOpen',
				data: false,
			});
			commit('SET_STATE', {
				action: 'isLoginModelOpenProject',
				data: false,
			});
			commit('SET_STATE', {
				action: 'isJobSeekerModelOpen',
				data: false,
			});

			//post gig login
			commit('SET_STATE', {
				action: 'isEmpLoginModelOpen',
				data: false,
			});

			commit('SET_STATE', {
				action: 'seekForGig',
				data: res.data.data.jobSeeker && res.data.data.jobSeeker.send_job_alert,
			});

			commit('SET_STATE', {
				action: 'incompleteProfileFlag',
				data: res.data.data?.incomplete_profile_flag,
			});
			// console.log(res.data.data?.first_time_login,'res.data.data?.first_time_login');
			commit('SET_STATE', {
				action: 'firstTimeLogin',
				data: res.data.data && res.data.data.first_time_login,
			});
			// set interval time for mainynce mode
			// setInterval(() => {
			// 	dispatch('auth/urlStatusAccess', null, { root: true });
			// }, 1000 * 60 * 5);
			// dispatch('auth/urlStatusAccess', null, { root: true });
			return {
				data: res.data,
			};
		} catch (err) {
			localStorage.removeItem('accessToken');

			// set user logged state
			commit('SET_STATE', { action: 'userLogged', data: false });

			// loading - false
			commit('SET_LOADER', false, { root: true });

			return Promise.reject({
				err,
			});
		} finally {
			let dataVariable = false;
			const clearSetTimeOut = setInterval(() => {
				if (dataVariable == false) {
					dispatch('auth/urlStatusAccess', null, { root: true })
						.then(res => {
							console.log(res.data, '---------');
						})
						.catch(err => {
							dataVariable = err.err.response.data.data.maintence_mode;
							if (err.err.response.data.data.maintence_mode) {
								clearInterval(clearSetTimeOut);
								Swal.fire({
									title: 'Maintenance mode is active',
									icon: 'warning',
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: 'Ok',
									allowOutsideClick: false,
								}).then(async result => {
									if (result.isConfirmed) {
										dispatch('auth/logout', null, { root: true });
										window.location.href = '/';
									}
								});
							}
						});
				}
			}, 1000 * 60 * 5);
			localStorage.setItem('maintenceModeTimeID', clearSetTimeOut);
			// dispatch('auth/urlStatusAccessSideBar', null, { root: true });
		}
	},

	//update user
	vueTour: async ({ commit }) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/complete-user-tour');
			commit('SET_LOADER', false, { root: true });

			return {
				data: res.data,
			};
		} catch (err) {
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// logout user
	logout: async ({ commit }) => {
		localStorage.removeItem('hideTaxAlert');
		localStorage.removeItem('accessToken');

		// set user logged state
		commit('SET_STATE', { action: 'userLogged', data: false });

		// set user tyep state
		commit('SET_STATE', { action: 'userType', data: '' });

		// remove user details
		commit('SET_USER_INFO', null);

		localStorage.clear();
	},

	// add employer - by job seeker
	addAnonymousEmployer: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/jobseeker/employer-by-seeker', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// change password
	changePassword: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/change-password', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// update seeker profile
	updateSeekerProfile: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/seeker', payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// update company profile
	updateCompanyProfile: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/company', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	//team member data
	getTeamMembers: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.get('/company/company-team', {
				params: { ...payload },
			});
			// loading - false
			commit('SET_LOADER', false, { root: true });
			commit('SET_STATE', {
				action: 'TeamMemberList',
				data: res.data.data,
			});

			return {
				data: res.data.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const { message } = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},
	// get work detail by id
	getTeamMemberById: async ({ commit }, id) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.get(`/company/company-team/${id}`);

			// set work detail
			commit('SET_STATE', {
				action: 'TeamMember',
				data: res.data.data,
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			return {
				data: res.data.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// add team member
	addTeamMember: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/company/company-team/', payload, {
				// headers: {
				// 	'Content-Type': 'multipart/form-data',
				// },
			});

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	//delete team member
	// delete invoice
	deleteTeamMember: async ({ commit }, id) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.delete(`/company/company-team/seeker/${id}`);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	//seek for gigs deatils store
	// update seeker profile
	storeSeekerGigDetail: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.post('/jobseeker/gigs-settings', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	//get access url status
	urlStatusAccess: async ({ commit, dispatch }) => {
		// loading - true
		commit('SET_LOADER', false, { root: true });
		let maintanceMode;
		try {
			const res = await axios.get('/user/site-setting/url_access_mode');
			maintanceMode = res.data.data.maintence_mode;

			// console.log(Swal, 'ooooooo');
			// loading - false
			commit('SET_LOADER', false, { root: true });
			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			maintanceMode = err.response.data.data.maintence_mode;

			// const message = handleAPIError(err);

			return Promise.reject({
				// message,
				err,
			});
		}
		// finally {
		// 	if (maintanceMode) {
		// 		// console.log(clearSetTimeOut, 'clearSetTimeOut');
		// 		Swal.fire({
		// 			title: 'Maintenance mode is active',
		// 			icon: 'warning',
		// 			confirmButtonColor: '#3085d6',
		// 			cancelButtonColor: '#d33',
		// 			confirmButtonText: 'Ok',
		// 			allowOutsideClick: false,
		// 		}).then(async result => {
		// 			if (result.isConfirmed) {
		// 				dispatch('auth/logout', null, { root: true });
		// 			}
		// 		});
		// 	}
		// }
	},

	urlStatusAccessSideBar: async ({ commit, dispatch }) => {
		// loading - true
		commit('SET_LOADER', false, { root: true });
		let maintanceMode;
		try {
			const res = await axios.get('/user/site-setting/url_access_mode');
			maintanceMode = res.data.data.maintence_mode;

			// console.log(Swal, 'ooooooo');
			// loading - false
			commit('SET_LOADER', false, { root: true });
			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			maintanceMode = err.response.data.data.maintence_mode;

			// const message = handleAPIError(err);

			return Promise.reject({
				// message,
				err,
			});
		} finally {
			if (maintanceMode) {
				clearInterval(localStorage.getItem('maintenceModeTimeID'));
				Swal.fire({
					title: 'Maintenance mode is active',
					icon: 'warning',
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
					allowOutsideClick: false,
				}).then(async result => {
					if (result.isConfirmed) {
						dispatch('auth/logout', null, { root: true });
						window.location.href = '/';
					}
				});
			}
		}
	},

	urlStatusAccessMode: async ({ commit }) => {
		// loading - true
		commit('SET_LOADER', false, { root: true });

		try {
			const res = await axios.get('/user/site-setting/url_access_mode');
			// console.log(res.data.data.url_access_mode, 'dfggdshjgfdsf');
			// console.log(res.data, 'dataaaaaaaaaaaaaaaaaa');

			// loading - false
			commit('SET_LOADER', false, { root: true });
			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			// const message = handleAPIError(err);

			return Promise.reject({
				// message,
				err,
			});
		}
	},

	//invitaqtion accept
	acceptInvitationUser: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			// const res = await axios.put(
			// 	'api/user/update-member-status',
			// 	params: { ...payload },
			// );
			const res = await axios.put('/user/update-member-status', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// invoice quick pay verify
	acceptInvoiceQuickpayVerify: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/quick-pay-verify', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// team invoice quick pay verify
	acceptTeamInvoiceQuickpayVerify: async ({ commit }, payload) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });

		try {
			const res = await axios.put('/user/team-quickPay-verify', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // success message

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// update user name
	// update Team name
	updateUserName: async ({ commit }, { payload }) => {
		// loading - true
		commit('SET_LOADER', true, { root: true });
		console.log(payload);

		try {
			const res = await axios.put('/user/update-name', payload);

			// loading - false
			commit('SET_LOADER', false, { root: true });

			toast.success(res.data.message); // toast

			return {
				data: res.data,
			};
		} catch (err) {
			// loading - false
			commit('SET_LOADER', false, { root: true });

			const message = handleAPIError(err);

			return Promise.reject({
				message,
			});
		}
	},

	// // user check maintance mode set time interval
	// setTimeIntervalUserSession:async({commit},{payload}) =>{
	// 	// loading - true
	// 	commit('SET_LOADER', true, { root: true });
	// 	console.log(payload);
	// 	try{

	// 	} catch(err){

	// 	}
	// }
};
