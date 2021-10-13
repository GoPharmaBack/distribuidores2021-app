import React from 'react'
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_AK98_MACHINE.png?alt=media&token=f01276a4-9589-4639-9505-7c3bc6d785ca',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_AK98_MACHINE.png?alt=media&token=f01276a4-9589-4639-9505-7c3bc6d785ca',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_CLARIA.png?alt=media&token=579f8ace-0c7e-4c35-a699-d22b09e8d456',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_CLARIA.png?alt=media&token=579f8ace-0c7e-4c35-a699-d22b09e8d456',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_EMEA.png?alt=media&token=3079076a-b727-4cc0-812e-14c9028ff5c0',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_EMEA.png?alt=media&token=3079076a-b727-4cc0-812e-14c9028ff5c0',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS.png?alt=media&token=d286116b-a470-4bbe-a400-2d42fd29005a',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS.png?alt=media&token=d286116b-a470-4bbe-a400-2d42fd29005a',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS_VINIL.png?alt=media&token=6ff354be-cc69-449f-b684-7ee70fed7fcb',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS_VINIL.png?alt=media&token=6ff354be-cc69-449f-b684-7ee70fed7fcb',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_THERMAX_BAG.png?alt=media&token=8ec95042-0227-4a05-8f64-77e9fbceb6c4',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_THERMAX_BAG.png?alt=media&token=8ec95042-0227-4a05-8f64-77e9fbceb6c4',
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_THERMAX_BAG201.png?alt=media&token=05c407e5-299c-45a0-a692-925adcd30f5b',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_THERMAX_BAG201.png?alt=media&token=05c407e5-299c-45a0-a692-925adcd30f5b',
    
  }
];

function GaleriaAdvancedSurgery() {
  return (
    <ImageGallery items={images} originalTitle />
  )
}

export default GaleriaAdvancedSurgery
