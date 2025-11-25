import { AUTHORIZATION_KEY } from "../common/authorizationKey";
import { getItemStorage } from "./storage.JS";
import { setItemStorage } from "./storage.JS";
import { removeItemStorage } from "./storage.JS";

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY)