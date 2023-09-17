import React from 'react'
import QRCode from "react-qr-code";

export default function QrCode() {
  return (
    <div
    style={{
      height: "auto",
      margin: "0 auto",
      maxWidth: 200,
      width: "100%",
    }}
  >
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={"http://localhost:3000/register/"}
      viewBox={`0 0 256 256`}
    />
  </div>
  )
}
