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
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczP877yf4bxBBTe2-_maTfgopCTwi2bJO-aBylbrLvGRYgY4cTP3WfDm48EZ-TdueSW0O5NUAZ-rGsMDIbaNxgnNyhKLZSkadO_YvVFPaIIPYWM86CoHbbmjkG9aF8UZopA8PhDILyz7oyY-3V4Dkgu4=w552-h552-s-no-gm?authuser=0"
                width="200px"
              />
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
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="links" />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/NoobSourabh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="links" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default QR;
