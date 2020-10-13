import React, { useEffect, useMemo } from 'react'
import * as firebase from 'firebase/app'
import 'firebase/messaging'
import { firebaseCloudMessaging } from '../utils/webPush'

function App() {
  useEffect(() => {
    setToken()
    // this is working
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', (event) => console.log('event for the service worker', event))
    }
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init()
        if (token) {
          console.log('token', token)
          // not working
          getMessage()
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  function getMessage() {
    console.log('message functions')
    const messaging = firebase.messaging()
    messaging.onMessage((message) => console.log('foreground', message))
  }

  return <div>Woah! wait let me get it right</div>
}
export default App
