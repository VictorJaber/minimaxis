import './App.css';
import { useEffect, useState } from 'react'
import {
  nip98,
  validateEvent,
  verifySignature
} from 'nostr-tools'
import axios from 'axios'

const loginUrl = 'https://webhook.site/9c1e6a08-37c9-4f2a-968d-b01f3579a9d4'
const httpMethod = 'post'

function App() {
  const [ isNip07Enabled, setNip07Enabled ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState(null)

  function isUserAuthenticated () {
    return currentUser !== null
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (window.nostr) {
        setNip07Enabled(true)
      }
      clearTimeout(timeout)
    }, 100)
  })

  async function attemptLoginWithNostr () {
    let base64AuthorizationToken = null
    
    try {
      base64AuthorizationToken = await nip98.getToken(loginUrl, httpMethod, (nip98Event) => {
        if (window.nostr) {
          return window.nostr.signEvent(nip98Event)
        }
      })
    } catch (error) {
      console.error('failed 98', error)
    }

    if (base64AuthorizationToken) {
      try {
        if (httpMethod === 'post') {

          // FIXME: Should do a real call to the backend api
          // const httpOptions = {
          //   headers: {
          //     Authorization: `Nostr ${base64AuthorizationToken}`
          //   }
          // }
          // const result = await axios.post(loginUrl, httpOptions)
          // console.log('logged in', result.data)

          // For now, doing it in the frontend from demo
          // BACKEND:

          // get token from header
          const token = `Nostr ${base64AuthorizationToken}`.split('Nostr ')[1]

          const signInEvent = JSON.parse(atob(token))
          if (signInEvent && validateEvent(signInEvent) && verifySignature(signInEvent)) {
            // must verify if the event is recent
            // created_at is 60s old

            // generate a short-lived jwt for this user
            const user = signInEvent.pubkey
            setCurrentUser(user)
          } else {
            console.log('not validated, must return http response with status 401')
          }
        } else {
          alert('not implemented')
        }
      } catch (error) {
        console.error('login error', error)
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isUserAuthenticated() ? (
          <button
          disabled={!isNip07Enabled}
          onClick={attemptLoginWithNostr}
        >
          Login with Nostr
        </button>
        ): (<>
          {currentUser}
        </>)}
      </header>
    </div>
  );
}

export default App;
