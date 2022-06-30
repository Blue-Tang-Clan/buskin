import React, { useEffect, useState } from 'react';
const QrCode = require('qrcode');

export default function Qr({ artistId, artistName }) {
  const artistUrl = `http://localhost:3000/artist/${artistId}`;
  const [img, setImg] = useState('');
  // component should mount first to make reference to an element
  useEffect(() => {
    const canvas = document.getElementById('qr');
    canvas !== null && QrCode.toCanvas(canvas, artistUrl, {
      width: 250,
    });
    setImg(canvas.toDataURL("image/png"));
    console.log(img);
  }, []);

  return (
    <div className="qrcode">
      <canvas id="qr" style={{height: '250px', width: '250px'}}>
      </canvas>
      {
        img && <a href={img} download={artistName}>Download</a>
      }
    </div>
  );
}
