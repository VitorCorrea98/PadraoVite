import { Dispatch } from '../../types';

export const actionCount = (increment = 1) => ({
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const actionClick = () => ({
  type: 'INCREMENT_CLICK',
  payload: 1,
});

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(imageURL: string) {
  return {
    type: REQUEST_SUCCESSFUL,
    payload: imageURL,
  };
}

function requestFailed(error: string) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchDogImage() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      dispatch(requestSuccessful(data.message));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
}
