import { API_URL } from "../config";

// SELECTORS
export const getAllTables = (state) => state.tables;
export const getAllTableIds = (state) => state.tables.map((table) => table.id);
export const getTableById = ({ tables }, tableId) => tables.find((table) => table.id === tableId);

// ACTIONS
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_API_TABLES = createActionName('UPDATE_API_TABLES');

// ACTION CREATORS
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
  return(dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

export const updateAPITables = payload => ({ type: UPDATE_API_TABLES, payload });
export const fetchUpdateTables = (editTables) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editTables)
    };
    fetch(`${API_URL}/tables/${editTables.id}`, options)
      .then((res) => res.json())
      .then((editTables) => dispatch(updateAPITables(editTables)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_API_TABLES:
      return statePart.map((table) => table.id === action.payload.id ? { ...table, ...action.payload } : table);
    default:
      return statePart;
  };
};

export default tablesReducer;
