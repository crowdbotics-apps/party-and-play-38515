import axios from "axios"
const royalriverAPI = axios.create({
  baseURL: "https://party-plan-and-play-38515.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return royalriverAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_bank_account_list(payload) {
  return royalriverAPI.get(`/api/v1/bank_account/`)
}
function api_v1_bank_account_create(payload) {
  return royalriverAPI.post(`/api/v1/bank_account/`, payload.data)
}
function api_v1_bank_account_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/bank_account/${payload.id}/`)
}
function api_v1_bank_account_update(payload) {
  return royalriverAPI.put(`/api/v1/bank_account/${payload.id}/`, payload.data)
}
function api_v1_bank_account_partial_update(payload) {
  return royalriverAPI.patch(
    `/api/v1/bank_account/${payload.id}/`,
    payload.data
  )
}
function api_v1_bank_account_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/bank_account/${payload.id}/`)
}
function api_v1_budget_list(payload) {
  return royalriverAPI.get(`/api/v1/budget/`)
}
function api_v1_budget_create(payload) {
  return royalriverAPI.post(`/api/v1/budget/`, payload.data)
}
function api_v1_budget_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/budget/${payload.id}/`)
}
function api_v1_budget_update(payload) {
  return royalriverAPI.put(`/api/v1/budget/${payload.id}/`, payload.data)
}
function api_v1_budget_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/budget/${payload.id}/`, payload.data)
}
function api_v1_budget_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/budget/${payload.id}/`)
}
function api_v1_customer_list(payload) {
  return royalriverAPI.get(`/api/v1/customer/`)
}
function api_v1_customer_create(payload) {
  return royalriverAPI.post(`/api/v1/customer/`, payload.data)
}
function api_v1_customer_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/customer/${payload.id}/`)
}
function api_v1_customer_update(payload) {
  return royalriverAPI.put(`/api/v1/customer/${payload.id}/`, payload.data)
}
function api_v1_customer_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/customer/${payload.id}/`, payload.data)
}
function api_v1_customer_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/customer/${payload.id}/`)
}
function api_v1_event_list(payload) {
  return royalriverAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(payload) {
  return royalriverAPI.post(`/api/v1/event/`, payload.data)
}
function api_v1_event_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/event/${payload.id}/`)
}
function api_v1_event_update(payload) {
  return royalriverAPI.put(`/api/v1/event/${payload.id}/`, payload.data)
}
function api_v1_event_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/event/${payload.id}/`, payload.data)
}
function api_v1_event_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/event/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return royalriverAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_notification_list(payload) {
  return royalriverAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return royalriverAPI.post(`/api/v1/notification/`, payload.data)
}
function api_v1_notification_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return royalriverAPI.put(`/api/v1/notification/${payload.id}/`, payload.data)
}
function api_v1_notification_partial_update(payload) {
  return royalriverAPI.patch(
    `/api/v1/notification/${payload.id}/`,
    payload.data
  )
}
function api_v1_notification_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return royalriverAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return royalriverAPI.post(`/api/v1/payment/`, payload.data)
}
function api_v1_payment_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return royalriverAPI.put(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_reviews_list(payload) {
  return royalriverAPI.get(`/api/v1/reviews/`)
}
function api_v1_reviews_create(payload) {
  return royalriverAPI.post(`/api/v1/reviews/`, payload.data)
}
function api_v1_reviews_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/reviews/${payload.id}/`)
}
function api_v1_reviews_update(payload) {
  return royalriverAPI.put(`/api/v1/reviews/${payload.id}/`, payload.data)
}
function api_v1_reviews_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/reviews/${payload.id}/`, payload.data)
}
function api_v1_reviews_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/reviews/${payload.id}/`)
}
function api_v1_service_list(payload) {
  return royalriverAPI.get(`/api/v1/service/`)
}
function api_v1_service_create(payload) {
  return royalriverAPI.post(`/api/v1/service/`, payload.data)
}
function api_v1_service_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/service/${payload.id}/`)
}
function api_v1_service_update(payload) {
  return royalriverAPI.put(`/api/v1/service/${payload.id}/`, payload.data)
}
function api_v1_service_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/service/${payload.id}/`, payload.data)
}
function api_v1_service_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/service/${payload.id}/`)
}
function api_v1_service_type_list(payload) {
  return royalriverAPI.get(`/api/v1/service_type/`)
}
function api_v1_service_type_create(payload) {
  return royalriverAPI.post(`/api/v1/service_type/`, payload.data)
}
function api_v1_service_type_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/service_type/${payload.id}/`)
}
function api_v1_service_type_update(payload) {
  return royalriverAPI.put(`/api/v1/service_type/${payload.id}/`, payload.data)
}
function api_v1_service_type_partial_update(payload) {
  return royalriverAPI.patch(
    `/api/v1/service_type/${payload.id}/`,
    payload.data
  )
}
function api_v1_service_type_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/service_type/${payload.id}/`)
}
function api_v1_settings_list(payload) {
  return royalriverAPI.get(`/api/v1/settings/`)
}
function api_v1_settings_create(payload) {
  return royalriverAPI.post(`/api/v1/settings/`, payload.data)
}
function api_v1_settings_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/settings/${payload.id}/`)
}
function api_v1_settings_update(payload) {
  return royalriverAPI.put(`/api/v1/settings/${payload.id}/`, payload.data)
}
function api_v1_settings_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/settings/${payload.id}/`, payload.data)
}
function api_v1_settings_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/settings/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return royalriverAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_user_role_list(payload) {
  return royalriverAPI.get(`/api/v1/user_role/`)
}
function api_v1_user_role_create(payload) {
  return royalriverAPI.post(`/api/v1/user_role/`, payload.data)
}
function api_v1_user_role_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/user_role/${payload.id}/`)
}
function api_v1_user_role_update(payload) {
  return royalriverAPI.put(`/api/v1/user_role/${payload.id}/`, payload.data)
}
function api_v1_user_role_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/user_role/${payload.id}/`, payload.data)
}
function api_v1_user_role_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/user_role/${payload.id}/`)
}
function api_v1_vendor_list(payload) {
  return royalriverAPI.get(`/api/v1/vendor/`)
}
function api_v1_vendor_create(payload) {
  return royalriverAPI.post(`/api/v1/vendor/`, payload.data)
}
function api_v1_vendor_retrieve(payload) {
  return royalriverAPI.get(`/api/v1/vendor/${payload.id}/`)
}
function api_v1_vendor_update(payload) {
  return royalriverAPI.put(`/api/v1/vendor/${payload.id}/`, payload.data)
}
function api_v1_vendor_partial_update(payload) {
  return royalriverAPI.patch(`/api/v1/vendor/${payload.id}/`, payload.data)
}
function api_v1_vendor_destroy(payload) {
  return royalriverAPI.delete(`/api/v1/vendor/${payload.id}/`)
}
function modules_privacy_policy_list(payload) {
  return royalriverAPI.get(`/modules/privacy-policy/`)
}
function modules_privacy_policy_create(payload) {
  return royalriverAPI.post(`/modules/privacy-policy/`, payload.data)
}
function modules_privacy_policy_retrieve(payload) {
  return royalriverAPI.get(`/modules/privacy-policy/${payload.id}/`)
}
function modules_privacy_policy_update(payload) {
  return royalriverAPI.put(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_partial_update(payload) {
  return royalriverAPI.patch(
    `/modules/privacy-policy/${payload.id}/`,
    payload.data
  )
}
function modules_privacy_policy_destroy(payload) {
  return royalriverAPI.delete(`/modules/privacy-policy/${payload.id}/`)
}
function modules_terms_and_conditions_list(payload) {
  return royalriverAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return royalriverAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function modules_terms_and_conditions_retrieve(payload) {
  return royalriverAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return royalriverAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return royalriverAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return royalriverAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return royalriverAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return royalriverAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return royalriverAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return royalriverAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return royalriverAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return royalriverAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return royalriverAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return royalriverAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_retrieve(payload) {
  return royalriverAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return royalriverAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return royalriverAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_bank_account_list,
  api_v1_bank_account_create,
  api_v1_bank_account_retrieve,
  api_v1_bank_account_update,
  api_v1_bank_account_partial_update,
  api_v1_bank_account_destroy,
  api_v1_budget_list,
  api_v1_budget_create,
  api_v1_budget_retrieve,
  api_v1_budget_update,
  api_v1_budget_partial_update,
  api_v1_budget_destroy,
  api_v1_customer_list,
  api_v1_customer_create,
  api_v1_customer_retrieve,
  api_v1_customer_update,
  api_v1_customer_partial_update,
  api_v1_customer_destroy,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_event_retrieve,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_destroy,
  api_v1_login_create,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_reviews_list,
  api_v1_reviews_create,
  api_v1_reviews_retrieve,
  api_v1_reviews_update,
  api_v1_reviews_partial_update,
  api_v1_reviews_destroy,
  api_v1_service_list,
  api_v1_service_create,
  api_v1_service_retrieve,
  api_v1_service_update,
  api_v1_service_partial_update,
  api_v1_service_destroy,
  api_v1_service_type_list,
  api_v1_service_type_create,
  api_v1_service_type_retrieve,
  api_v1_service_type_update,
  api_v1_service_type_partial_update,
  api_v1_service_type_destroy,
  api_v1_settings_list,
  api_v1_settings_create,
  api_v1_settings_retrieve,
  api_v1_settings_update,
  api_v1_settings_partial_update,
  api_v1_settings_destroy,
  api_v1_signup_create,
  api_v1_user_role_list,
  api_v1_user_role_create,
  api_v1_user_role_retrieve,
  api_v1_user_role_update,
  api_v1_user_role_partial_update,
  api_v1_user_role_destroy,
  api_v1_vendor_list,
  api_v1_vendor_create,
  api_v1_vendor_retrieve,
  api_v1_vendor_update,
  api_v1_vendor_partial_update,
  api_v1_vendor_destroy,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
