import { CHANGE_TEXT } from './types'


export function changeText () {
  return {
    type: CHANGE_TEXT,
    data: 'change test data'
  }
}

