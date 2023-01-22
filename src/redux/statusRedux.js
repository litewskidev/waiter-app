// SELECTORS
export const getAllStatuses = ({ status }) => status;

// ACTIONS
const createActionName = actionName => `app/status/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

// ACTION CREATORS
export const updateStatus = payload => ({ type: UPDATE_STATUS, payload });
export const fetchStatus = () => {
  return(dispatch) => {
    fetch('http://localhost:3131/api/status')
      .then(res => res.json())
      .then(status => dispatch(updateStatus(status)));
  };
};

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default statusReducer;
