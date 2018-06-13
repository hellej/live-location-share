
const initialLocationShare = {
  user: null,
  location: null,
  updateTime: null,
  expireTime: null
}


const locationShareReducer = (store = initialLocationShare, action) => {

  switch (action.type) {
    case 'SHOWNOTIF':
      return { text: action.notification.text, type: action.notification.type }

    case 'RMNOTIF':
      return initialLocationShare


    default:
      return store
  }
}


export const showNotification = (notification, notiftime) => {
  return async (dispatch) => {

  }
}


export default locationShareReducer