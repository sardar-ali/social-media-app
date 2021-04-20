import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../actionType/types";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
    const id = uuid.v4();

    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id },
    });

    //Remove alert after five second
    setTimeout(() => {
        dispatch({
            type: REMOVE_ALERT,
            payload: id,
        });
    }, timeout);
};
