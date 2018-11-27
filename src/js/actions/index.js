export const updatePositionAction = (index, position) => ({
  type: 'UPDATE_POSITION_TABLE',
  data: {
    index: index,
    position: position,
  },
})

export const addNewTableAction = () => ({
  type: 'ADD_NEW_TABLE',
  data: {
    
  }
})