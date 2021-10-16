import React from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_COLLEAGE_1088x618.png?alt=media&token=13122490-08ac-473c-81a0-9e2363c61580",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_COLLEAGE_1088x618.png?alt=media&token=13122490-08ac-473c-81a0-9e2363c61580",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_EVOIQ-LPV_1088x618.png?alt=media&token=326d8f02-c0af-444a-a364-ae9b06782c74",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_EVOIQ-LPV_1088x618.png?alt=media&token=326d8f02-c0af-444a-a364-ae9b06782c74",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_INFUSOR_1088x618.png?alt=media&token=61e75107-8785-4342-bf7e-c0d83e4b547f",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_INFUSOR_1088x618.png?alt=media&token=61e75107-8785-4342-bf7e-c0d83e4b547f",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_MINIBAG-PLUS_1088x618.png?alt=media&token=e74bf894-1acc-4079-9a46-bd8ef52419c0",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_MINIBAG-PLUS_1088x618.png?alt=media&token=e74bf894-1acc-4079-9a46-bd8ef52419c0",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_NUMETZAH_1088x618.png?alt=media&token=b02d8ea8-a9b6-41be-8e46-2ad2cf6019d0",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_NUMETZAH_1088x618.png?alt=media&token=b02d8ea8-a9b6-41be-8e46-2ad2cf6019d0",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_OLIMEL-N7E_1088x618.png?alt=media&token=78841d62-a739-4992-8f33-72d9744d8290",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_OLIMEL-N7E_1088x618.png?alt=media&token=78841d62-a739-4992-8f33-72d9744d8290",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSpectrum_IQ.png?alt=media&token=f7b95ec1-35ca-4126-a630-fa646cd4b60e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FHOSPITAL%2FSpectrum_IQ.png?alt=media&token=f7b95ec1-35ca-4126-a630-fa646cd4b60e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_OLIMEL-N9E_1088x618.png?alt=media&token=4ab790dd-a862-49c2-8b1c-8304dfb5efc2",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_OLIMEL-N9E_1088x618.png?alt=media&token=4ab790dd-a862-49c2-8b1c-8304dfb5efc2",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_PLASMALYTE_1088x618.png?alt=media&token=99173294-71d9-4eb4-bb18-39edad4578d8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_PLASMALYTE_1088x618.png?alt=media&token=99173294-71d9-4eb4-bb18-39edad4578d8",
  },
  //nuevas
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_SPECTRUM-IQ_1088x618.png?alt=media&token=93af6257-3ef3-4d94-82ba-bca0933dd3a4",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_SPECTRUM-IQ_1088x618.png?alt=media&token=93af6257-3ef3-4d94-82ba-bca0933dd3a4",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_STARLING_1088x618.png?alt=media&token=36a588a8-43ad-40eb-ab27-0e04ea02d77e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_STARLING_1088x618.png?alt=media&token=36a588a8-43ad-40eb-ab27-0e04ea02d77e",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_SUPRANE_1088x618.png?alt=media&token=0cb6e63c-da04-47c1-b7be-9124ffae38cf",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/HOSP-PROD_SUPRANE_1088x618.png?alt=media&token=0cb6e63c-da04-47c1-b7be-9124ffae38cf",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} />;
}

export default GaleriaAdvancedSurgery;
