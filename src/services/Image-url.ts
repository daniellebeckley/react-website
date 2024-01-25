const getCroppedImageUrl = (url: string) => {
  const media = "media/";

  const index = url.indexOf(media) + media.length;

  return url.slice(0, index).concat("crop/600/400/").concat(url.slice(index));
};

export default getCroppedImageUrl;
