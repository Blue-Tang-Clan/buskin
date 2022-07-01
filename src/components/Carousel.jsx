import React from 'react';
import bootstrap from 'bootstrap';

export default function ImgCarousel() {
  return (
    <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
    <div className='carousel-inner'>
      <div className='carousel-item active' data-bs-interval='2000'>
        <img src='https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/concert-photography/thumbnail.jpeg' className='d-block w-100 carouselImg' alt='...' />
      </div>
      <div className='carousel-item' data-bs-interval='2000'>
        <img src='https://thumbs.dreamstime.com/b/concert-crowd-10219443.jpg' className='d-block w-100 carouselImg' alt='...' />
      </div>
      <div className='carousel-item'>
        <img src='https://media.gettyimages.com/photos/group-of-people-at-music-concert-picture-id1281070967?s=612x612' className='d-block w-100 carouselImg' alt='...' />
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
