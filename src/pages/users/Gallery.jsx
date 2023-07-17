import React, { useState } from 'react';

const Gallery = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (src) => {
    setEnlargedImage(src);
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };

  const galleryImages = [
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1125137/pexels-photo-1125137.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1040893/pexels-photo-1040893.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959583/pexels-photo-2959583.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3932957/pexels-photo-3932957.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2962140/pexels-photo-2962140.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4112553/pexels-photo-4112553.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5570224/pexels-photo-5570224.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3614082/pexels-photo-3614082.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3546132/pexels-photo-3546132.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4846437/pexels-photo-4846437.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3614082/pexels-photo-3614082.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959583/pexels-photo-2959583.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5255232/pexels-photo-5255232.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1885562/pexels-photo-1885562.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5825576/pexels-photo-5825576.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1366879/pexels-photo-1366879.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1366872/pexels-photo-1366872.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7992450/pexels-photo-7992450.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/16013182/pexels-photo-16013182/free-photo-of-black-and-white-picture-of-a-chair-in-an-empty-room-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15991140/pexels-photo-15991140/free-photo-of-retro-decor-of-apartment.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/609768/pexels-photo-609768.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  

  return (
    <div>
      <h1 className='galleryheader'>Our Furniture Gallery</h1>
      <div className='galleryphotos'>
      <div className='gallerycard'>
        {galleryImages.map((src, index) => (
          <img
            key={index}
            className='galleryimage'
            src={src}
            alt=""
            onClick={() => handleImageClick(src)}
          />
        ))}
      </div>

      {enlargedImage && (
        <div
          className="enlarged-image-overlay"
          onClick={handleEnlargedImageClick}
        >
          <img
            className="enlarged-image"
            src={enlargedImage}
            alt=""
          />
        </div>
       
      )}
       </div>

     
          

       
         
    </div>
  );
}

export default Gallery;
