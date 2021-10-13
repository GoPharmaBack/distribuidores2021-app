import React from 'react'
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_AK98_MACHINE.png?alt=media&token=f01276a4-9589-4639-9505-7c3bc6d785ca',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_AK98_MACHINE.png?alt=media&token=f01276a4-9589-4639-9505-7c3bc6d785ca',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function GaleriaAdvancedSurgery() {
  return (
    <ImageGallery items={images} />
  )
}

export default GaleriaAdvancedSurgery
