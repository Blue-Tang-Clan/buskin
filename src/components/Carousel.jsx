import React from 'react';
import bootstrap from 'bootstrap';

export default function ImgCarousel() {
  return (
    <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
    <div className='carousel-inner'>
      <div className='carousel-item active carouselImg imgContainer' data-bs-interval='2000'>
        <img src={'https://media.gettyimages.com/photos/busker-playing-violin-on-city-street-picture-id148615534?s=2048x2048'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
      <div className='carousel-item carouselImg imgContainer' data-bs-interval='2000'>
        <img src={'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.taucha-kompakt.de%2Fwp-content%2Fuploads%2F2022%2F04%2Fbreaking-olympia-2024-b-boys-b-girls.jpg'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
      <div className='carousel-item carouselImg imgContainer'>
        <img src={'https://media.gettyimages.com/photos/four-mexican-musicians-mexico-picture-id523506940?s=2048x2048'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
      <div className='carousel-item carouselImg imgContainer'>
        <img src={'https://media.gettyimages.com/photos/cuba-man-with-guitar-walking-on-the-street-picture-id717168019?s=2048x2048'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
      <div className='carousel-item carouselImg imgContainer'>
        <img src={'https://images.unsplash.com/photo-1550924972-6d13419fb0c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
      <div className='carousel-item carouselImg imgContainer'>
        <img src={'https://i.ibb.co/d6SdhP6/priscilla-du-preez-Yrg5b-Nx-Ejgk-unsplash.jpg'} className='ImageInside' alt='...' style={{ objectFit: 'cover'}} />
      </div>
    </div>
    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
      <span className='carousel-control-prev-icon' aria-hidden='true'></span>
      <span className='visually-hidden'>Previous</span>
    </button>
    <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
      <span className='carousel-control-next-icon' aria-hidden='true'></span>
      <span className='visually-hidden'>Next</span>
    </button>
  </div>
  )
};
