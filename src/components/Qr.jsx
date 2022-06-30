import React, { useEffect, useState } from 'react';
const QrCode = require('qrcode');

export default function Qr({ artistId, artistName }) {
  console.log('artigst: ', artistId)
  const artistUrl = `http://localhost:3000/artist/details/${artistId}`;
  const [img, setImg] = useState('');
  // component should mount first to make reference to an element
  useEffect(() => {
    const canvas = document.getElementById('qr');
    canvas !== null && QrCode.toCanvas(canvas, artistUrl);
    setImg(canvas.toDataURL("image/png"));
    console.log(img);
  }, []);

  return (
    <div>
      <canvas id="qr">
      </canvas>
      {
        img && <a href={img} download={artistName}>Download</a>
      }
    </div>
  );
}
