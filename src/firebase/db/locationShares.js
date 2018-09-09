import { db } from './../firebase'

export const createLocationShare = async () => {
  const ref = await db.ref('/locationShares').push()
  return ref.key
}

export const updateLocationShare = async (id, updatedLocation) => {
  await db.ref(`/locationShares/${id}`).set(updatedLocation)
}

export const getLocationShare = async (id) => {
  const ref = await db.ref(`/locationShares/${id}`).once('value')
  return ref.val()
}

export const getUpdatedLocationShare = (id) => (location) => {
  const ref = db.ref(`/locationShares/${id}`)
  return ref.on('value', (location))
}
