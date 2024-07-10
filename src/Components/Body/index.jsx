import React, { useState } from "react";
import "./styles.css";
import QR from "../Qr";
import QRCode from "qrcode";
function Body() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const options = {
        width: 310, // specify the width
        height: 310, // specify the height
      };
      const dataUrl = await QRCode.toDataURL(input, options);
      setUrl(dataUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    generateQrCode();
  };
  return (
    <div className="outercard">
      <div className="card">
        <div className="content">
          <h1>Convert</h1>
          <h1>your Link to</h1>
          <h1>QR code</h1>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Enter the URL (e.g example.com)"
            />
          </div>
          <p>
            Your QR code will be generated automatically,your generated QR code
            will open this URL
          </p>
        </div>
        <div className="qrBox">
          <QR url={url} />
        </div>
      </div>
    </div>
  );
}

export default Body;
