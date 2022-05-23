import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Camera } from './components/camera';
import React, { useState } from 'react';

const uploadImage = async (file : any) => {
  const formData = new FormData();
  formData.append('file', file);
  try{
    let config = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Content-Transfer-Encoding': 'base64'
      },
      body: file.blob()
    }

    let res = await fetch('https://front-exercise.z1.digital/evaluations', config)
    let json = await res.json()

    console.log(json);
  }catch (error){

  }
};


function App() {
  const [enable, setEnable] = useState(false);

  const openCamera = () => {
    setEnable(true)  
  }
  return (
      <div className="App">
          <h1>Image capture</h1>
          {enable ? (
            <div><Camera sendFile={uploadImage} />
            <button onClick={uploadImage}>Check Photo</button>
            </div>
				  ) : ( <button onClick={openCamera}>
            Open camera
            </button>)}
      </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
