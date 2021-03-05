import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (evt) => {

    evt.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic <MDZmZGU3YzYtYzE4OC00NDNkLWJlNmQtNDdiMWU2ZmM2ZTg0>");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cfduid=da8d1828aa2730b71a3e08a13477b0de61614879136");

    var raw = JSON.stringify(
      {
        "included_segments": ["Subscribed Users"],
        "app_id": "863c38f5-88ae-4b1d-9bdf-9374a00cd374",
        "contents": { "en": `${title}` },
        "headings": { "en": ` ${message}` },
        "data": { "custom_data": "some value" },
        "url": "https://onesignal.com/api/v1/notifications",
        "chrome_web_image": "https://perfildesign.com.br/storage/2018/10/Perfil-Design_Digital_Website_Thumbnail_Oston.jpg"

      });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://onesignal.com/api/v1/notifications", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => alert(`${error} Falha no envio` ));
    
      alert(`Envio completo`)
  }

  return (
    <div classtitle="App">

      <form onSubmit={handleSubmit}>
        <label>
          Push Notification:
        <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;






