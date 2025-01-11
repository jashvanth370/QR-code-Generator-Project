import { useState } from "react"

const QRcode = () => {
  const [img , setImg]= useState("");
  const [loading , setLoading] = useState(false);
  const [qrData , setqrData] = useState("jash");

  async function GenerateQR(){
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150×150&data=${qrData}`;
      setImg(url);
    } catch (error) {
        console.error("Error Generating QR code ",error);
    } finally{
        setLoading(false);
      }
    
  }
  
  
  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR </h1>
      {loading && <p>Please wait....</p>}
        {img &&<img src={img} alt="" className="image"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR Code
            </label>
            <input type="text" id="dataInput" placeholder="Enter Data for QR Code"/>

            <label htmlFor="sizeInput" className="input-label">
                Image size (e.g- 150): 
            </label>
            <input type="text" id="sizeInput" placeholder="Enter Image size"/>

            <button className="GenerateQR" onClick={GenerateQR}>Generate QR Code</button>
            <button className="DownloadQR">Download QR Code</button>
        </div>
    </div>

  )
}

export default QRcode
