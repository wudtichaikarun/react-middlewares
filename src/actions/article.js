import { CREATE_ARTICLE } from 'Actions'

let nextId = 1

export function createArticle(value) {
  return {
    type: CREATE_ARTICLE,
    article: {
      id: nextId++,
      value
    }
  }
}

