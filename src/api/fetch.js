/* eslint-disable */
const DEFAULTS = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const POST_DEFAULTS = {
  method: 'POST',
  ...DEFAULTS,
};

const PUT_DEFAULTS = {
  method: 'PUT',
  ...DEFAULTS,
};

const DELETE_DEFAULTS = {
  method: 'DELETE',
  ...DEFAULTS,
};

export const get = (type, route, callback, errorCb) => (dispatch) => dispatch(api(type, route, getPayload(DEFAULTS, null, 'get'), callback, errorCb));
export const post = (type, route, payload, callback, errorCb) => (dispatch) => dispatch(api(type, route, getPayload(POST_DEFAULTS, payload, 'post'), callback, errorCb));
export const put = (type, route, payload, callback, errorCb) => (dispatch) => dispatch(api(type, route, getPayload(PUT_DEFAULTS, payload, 'put'), callback, errorCb));
export const del = (type, route, payload, callback, errorCb) => (dispatch) => dispatch(api(type, route, getPayload(DELETE_DEFAULTS, payload, 'delete'), callback, errorCb));

const getPayload = (defaults, payload, type) => ({
  ...defaults,
  ...getBody(payload, type),
});

const getBody = (payload, type) => (type === 'get' ? {} : { body: JSON.stringify(payload) });

const api = (type, route, payload, callback, errorCb) => (dispatch) => {
  dispatch({
    type,
    payload: new Promise((resolve, reject) => fetch(`/${route}`, payload).then((res) => {
      const { ok } = res;
      const { status } = res;
      res.json().then((json) => {
        if (ok) {
          if (callback && typeof callback === 'function') {
            callback(json);
          }
          resolve(json);
        } else {
          if (errorCb && typeof errorCb === 'function') {
            errorCb(json);
          }
          reject({
            message: json.message,
            status,
          });
        }
      });
    })
      .catch((error) => {
        if (errorCb && typeof errorCb === 'function') {
          errorCb(error);
        }
        reject(error);
      })),
  });
};
