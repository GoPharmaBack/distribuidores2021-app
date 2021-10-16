import React from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_COSEAL_1088X618.png?alt=media&token=274e272f-d3ea-47b4-8589-2dc490cd742e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_COSEAL_1088X618.png?alt=media&token=274e272f-d3ea-47b4-8589-2dc490cd742e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_FLOSEAL_1088X618.png?alt=media&token=80fb0fed-858a-40f5-af1f-dff5d9cd1dcc",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_FLOSEAL_1088X618.png?alt=media&token=80fb0fed-858a-40f5-af1f-dff5d9cd1dcc",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_HEMOPATCH_1088X618.png?alt=media&token=ff0794fa-0717-4a61-88a7-b44df36d4c61",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_HEMOPATCH_1088X618.png?alt=media&token=ff0794fa-0717-4a61-88a7-b44df36d4c61",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_TISSEEL_1088X618.png?alt=media&token=29486b81-0dc9-4cfb-a139-627168c040af",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/galeria-advanced-surgery.appspot.com/o/ADV-SURG_TISSEEL_1088X618.png?alt=media&token=29486b81-0dc9-4cfb-a139-627168c040af",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} />;
}

export default GaleriaAdvancedSurgery;
