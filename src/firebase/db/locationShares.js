import { db } from './../firebase'

export const addLocationShare = async () => {
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

export const onLocationShareChanged = (id) => (snapshot) => {
  const ref = db.ref(`/locationShares/${id}`)
  return ref.on('value', (snapshot))
}

export const asdf = () => {
  const id = '-LGoR-bk9SxHW0rzEXFE'
  const ref = db.ref(`/locationShares/${id}`)
  return ref.on('value', (snapshot) => {
    const location = snapshot.val()
    console.log('changed location: ', { location })
    return location
  })
}
