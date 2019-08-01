import { CHANGE_TEXT } from './types'

let data = 'change test data'; 
export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data: 'change test data'
  }
}

