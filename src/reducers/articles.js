import { CREATE_ARTICLE } from 'Actions'

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_ARTICLE:
      return [...state, action.article]
    default: 
      return state
  }
}