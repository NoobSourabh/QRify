import React from "react";
import "./styles.css";
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
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flexcard">
        <div className="heading">Scan the QR to verify the URL</div>
        <div className="qrcard">
          <div className="actualQr">
            <img src={url} />
          </div>
        </div>
      </div>
      <div className="btn" onClick={donwloadQRCode}>
        <p>Download</p>
      </div>
    </div>
  );
}

export default QR;
