import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Camera } from './components/camera';



const uploadImage = async (file : any) => {
  const formData = new FormData();
  formData.append('file', file);

};

function App() {
  return (
      <div className="App">
          <h1>Image capture test</h1>
          <p>Capture image from USB webcamera and upload to form</p>
          <Camera sendFile={uploadImage} />
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
