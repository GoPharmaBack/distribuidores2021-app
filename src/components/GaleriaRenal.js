import React from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_AK98_MACHINE.png?alt=media&token=82d1799d-069b-4fd3-b79d-ecb769ee2d35",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_AK98_MACHINE.png?alt=media&token=82d1799d-069b-4fd3-b79d-ecb769ee2d35",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_OXIRIS.png?alt=media&token=af198856-a783-4979-87d8-0bd1bbd7ec18",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_OXIRIS.png?alt=media&token=af198856-a783-4979-87d8-0bd1bbd7ec18",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_OXIRIS_VINIL.png?alt=media&token=edbb9bc9-c274-45cf-9936-cd40c615f332",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_OXIRIS_VINIL.png?alt=media&token=edbb9bc9-c274-45cf-9936-cd40c615f332",
  },
  
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_THERMAX_BAG201.png?alt=media&token=0c07a6bc-0e95-4a38-91c9-e64fec7f9e8b",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_THERMAX_BAG201.png?alt=media&token=0c07a6bc-0e95-4a38-91c9-e64fec7f9e8b",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_THERMAX_BAG.png?alt=media&token=1e5ba26f-f2cc-4591-94c7-d7419d6bc622",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_THERMAX_BAG.png?alt=media&token=1e5ba26f-f2cc-4591-94c7-d7419d6bc622",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} originalTitle />;
}

export default GaleriaAdvancedSurgery;
