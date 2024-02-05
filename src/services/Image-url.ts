import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  const media = "media/";
  if (url === null) return noImage;
  const index = url.indexOf(media) + media.length;

  return url.slice(0, index).concat("crop/600/400/").concat(url.slice(index));
};

export default getCroppedImageUrl;
