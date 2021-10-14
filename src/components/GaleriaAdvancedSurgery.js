import React from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_COSEAL.png?alt=media&token=5bebc62d-0bae-470c-811f-8ac3c516132b",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_COSEAL.png?alt=media&token=5bebc62d-0bae-470c-811f-8ac3c516132b",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_FLOSEAL.png?alt=media&token=aede5790-d28c-447c-a048-4273954fcc21",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_FLOSEAL.png?alt=media&token=aede5790-d28c-447c-a048-4273954fcc21",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_HEMOPATCH.png?alt=media&token=29d77698-a284-4463-9f08-8ab5c1c1cd52",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_HEMOPATCH.png?alt=media&token=29d77698-a284-4463-9f08-8ab5c1c1cd52",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_TISSEL.png?alt=media&token=fb15030e-c380-4a7b-9652-5096b66ffa33",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FADVANCEDSURGERY%2FADVANCE_TISSEL.png?alt=media&token=fb15030e-c380-4a7b-9652-5096b66ffa33",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} />;
}

export default GaleriaAdvancedSurgery;
