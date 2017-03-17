
export const WEB_PORT = process.env.PORT || 8002;
export const STATIC_PATH = '/static';
export const APP_NAME = 'Robinhood';

export const WDS_PORT = 8004;

export const APP_CONTAINER_CLASS = 'js-app';
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;

//-------------------------------------
//  API
//-------------------------------------
export const API_BASE_URL = 'https://api.robinhood.com';
export const API_TRACKS_URL = `${API_BASE_URL}/tracks`;
export const API_USERS_URL = `${API_BASE_URL}/users`;

export const CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID || 'd02c42795f3bcac39f84eee0ae384b00';
export const CLIENT_ID_PARAM = `client_id=${CLIENT_ID}`;

export const PAGINATION_LIMIT = 60;
export const PAGINATION_PARAMS = `limit=${PAGINATION_LIMIT}&linked_partitioning=1`;
