import { db } from './../firebase'

export const getLocationShare = async (id) => {
  const ref = await db.ref(`/locationShares/${id}`).once('value')
  return ref.value()
}
