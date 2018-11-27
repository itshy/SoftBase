const initialState = {
  ID_Schema: undefined,
  ID_Author: undefined,
  title: undefined,
  tables: [
    {
      id: 0,
      title: undefined,
      relationships: undefined,
      position: {
        left: 150,
        top: 150,
      },
    },
    {
      id: 1,
      title: undefined,
      relationships: undefined,
      position: {
        left: 425,
        top: 150,
      },
    },
    {
      id: 2,
      title: undefined,
      relationships: undefined,
      position: {
        left: 700,
        top: 150,
      },
    },
  ],
}

export const tablesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POSITION_TABLE':
      return {
        ...state,
        tables: state.tables.map((table, index) => {
          if (index === action.data.index) {
            return {
              ...table,
              position: action.data.position
            }
          }
          return table;
        })
      }

    case 'ADD_NEW_TABLE':
      return {
        ...state,
        tables: state.tables.concat({
          id: state.tables.length,
          title: undefined,
          relationships: undefined,
          position: {
            left: 150,
            top: 150,
          },
        })
      }

    default:
      return state
  }
}