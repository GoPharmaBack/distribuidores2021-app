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
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS.png?alt=media&token=d286116b-a470-4bbe-a400-2d42fd29005a",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS.png?alt=media&token=d286116b-a470-4bbe-a400-2d42fd29005a",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS_VINIL.png?alt=media&token=6ff354be-cc69-449f-b684-7ee70fed7fcb",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/distribuidores2021-d71be.appspot.com/o/PRODUCTOS%2FRENAL_CARE%2FRENAL_CARE_OXIRIS_VINIL.png?alt=media&token=6ff354be-cc69-449f-b684-7ee70fed7fcb",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_PRISMAX_BAG.png?alt=media&token=d2a01bb1-9ce8-48df-a459-62453f01c0d8",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_PRISMAX_BAG.png?alt=media&token=d2a01bb1-9ce8-48df-a459-62453f01c0d8",
  },
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_PRISMAX_BAG201.png?alt=media&token=e0ad33b4-85c5-423b-8bc3-7866013fc551",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/baxterhospitalproduct.appspot.com/o/RenalCare%2FRENAL_CARE_1088X618_PRISMAX_BAG201.png?alt=media&token=e0ad33b4-85c5-423b-8bc3-7866013fc551",
  },
];

function GaleriaAdvancedSurgery() {
  return <ImageGallery items={images} originalTitle />;
}

export default GaleriaAdvancedSurgery;
