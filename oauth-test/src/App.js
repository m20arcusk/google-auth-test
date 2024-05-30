import React, { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";


function App() {

  function handleCallbackResponse(response) {
      console.log("Encoded JWT ID token:" + response.credential);
      var userObject = jwtDecode(response.credential);
      console.log(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize ({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )


  }, []);
  
  return (
    <div className="App" >
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;

