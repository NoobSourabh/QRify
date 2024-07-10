import React from "react";
import "./styles.css";
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";

import QRCode from "qrcode";
function QR({ url }) {
  const donwloadQRCode = async () => {
    try {
      const link = await document.createElement("a");
      link.href = url;
      link.download = encodeURIComponent("qr code");
      link.style.display = "none";
      link.click();
      document.removeChild(link);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="flexcard">
        <div className="heading">Scan the QR to verify the URL</div>
        <div className="qrcard">
          <div className="actualQr">
            {!url ? (
              <img src="src\assets\Bob_Bear 27s.png" width="200px" />
            ) : (
              <img src={url} />
            )}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="btn" onClick={donwloadQRCode}>
          <p>Download</p>
        </div>
        <div>
          <FaLinkedin className="links" />
        </div>
        <div>
          <FaGithub className="links" />
        </div>
      </div>
    </div>
  );
}

export default QR;
