import React, { useState } from "react";
import "./Scanner.scss";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const Scanner = () => {
  const [data, setData] = useState("Not Found");

  const handleScan = (err, result) => {
    if (err) {
      console.error("Scanning error:", err);
      return;
    }

    if (result) {
      if (result.text !== data) {  // Prevent duplicate console logs
        setData(result.text);
        console.log("Scanned QR Code:", result.text);
      }
    } else {
      setData("Not Found");
    }
  };

  return (
    <div>
      <h3>QR Code Scanner</h3>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={handleScan}
        facingMode="environment"  // Use "environment" for back camera (mobile)
      />
      <p>Result: {data}</p>
    </div>
  );
};

export default Scanner;
