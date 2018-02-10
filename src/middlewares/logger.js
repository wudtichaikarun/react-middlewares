export default store => dispatch => action => {
  console.log('--prevState', store.getState())
  console.log('action', action)
  const result = dispatch(action)
  console.log('nextState', store.getState())
  return result
}