import React from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2F2C2008K_Infusor.png?alt=media&token=659fb13b-bc51-4ea1-9e3d-f3b8ec0068ac",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2F2C2008K_Infusor.png?alt=media&token=659fb13b-bc51-4ea1-9e3d-f3b8ec0068ac",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FColleague.png?alt=media&token=68a01d68-5196-4dd1-88f3-6c3da0229a52",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FColleague.png?alt=media&token=68a01d68-5196-4dd1-88f3-6c3da0229a52",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FEvoIQLVP.png?alt=media&token=dcd0028c-ed01-4f0f-b2ed-144c0c7651e8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FEvoIQLVP.png?alt=media&token=dcd0028c-ed01-4f0f-b2ed-144c0c7651e8",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FImagen_minibag_plus.png?alt=media&token=117e129c-eff0-4136-8fee-c9816389d593",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FImagen_minibag_plus.png?alt=media&token=117e129c-eff0-4136-8fee-c9816389d593",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FOlimel.png?alt=media&token=496c486a-0d1a-4282-bed3-8ea6949bf818",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FOlimel.png?alt=media&token=496c486a-0d1a-4282-bed3-8ea6949bf818",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FPlasmalyte.png?alt=media&token=51414704-0c66-4e16-9f1a-a75f9ca13b9e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FPlasmalyte.png?alt=media&token=51414704-0c66-4e16-9f1a-a75f9ca13b9e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSpectrum_IQ.png?alt=media&token=f7b95ec1-35ca-4126-a630-fa646cd4b60e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSpectrum_IQ.png?alt=media&token=f7b95ec1-35ca-4126-a630-fa646cd4b60e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FStarling.png?alt=media&token=74ae998a-1795-4c6f-9f67-2366f528fd7a",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FStarling.png?alt=media&token=74ae998a-1795-4c6f-9f67-2366f528fd7a",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSuprine_Hero.png?alt=media&token=3d6b28af-4351-4e6d-8ac2-257917be1e4e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSuprine_Hero.png?alt=media&token=3d6b28af-4351-4e6d-8ac2-257917be1e4e",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} />;
}

export default GaleriaAdvancedSurgery;
