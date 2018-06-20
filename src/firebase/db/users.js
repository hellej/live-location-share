
//import { db } from './../firebase'
//import { auth } from './../firebase'

const auth = 'asd'
const db = 'asdf'

export const onceGetUsers = () => db.ref('users').once('value')

export const handleSignUp = async (form) => {
  const createUserRef = await auth.createUserWithEmailAndPassword(form.email, form.passwordOne)
  const user = createUserRef.user
  await user.updateProfile({ displayName: form.username })
  const dbUser = { id: user.uid, name: form.username, email: form.email, likes: [], tables: [] }
  await db.ref(`/users/${user.uid}`).set(dbUser)
}

export const handleSignIn = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password)
}

export const signInAnonymously = async (email, password) => {
  auth.signInAnonymously()
}

export const onAuthStateChanged = (user) => {
  return auth.onAuthStateChanged(user)
}

export const getCurrentUser = () => {
  return auth.currentUser
}

export const setUser = async (id, user) => {
  await db.ref(`/users/${id}`).set(user)
}

export const getUser = async (id) => {
  const userRef = await db.ref(`/users/${id}`).once('value')
  return userRef.val()
}

export const removeUser = async (id) => {
  await db.ref('users').child(id).remove()
}

export const signOut = async (id) => {
  await auth.signOut()
}

export const getAll = async (id) => {
  const snapshot = await db.ref('users').once('value')
  const users = Object.values(snapshot.val())
  return users
}

export const removeAnonymous = async (id) => {
  const users = await getAll()
  const anonymousUsers = users.filter(user => user.anonymous)
  const anonymousIDs = anonymousUsers.map(user => user.id)
  for (id in anonymousIDs) {
    await removeUser(anonymousIDs[id])
  }
}

export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email)

export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password)