const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY_CLOUDINARY,
  api_secret: process.env.API_SECRET_CLOUDINARY,
});

exports.extractUrl = async (file, folderName) => {
  try {
    let imageUrl = "";
    const { path } = file;
    const { url } = await cloudinary.uploader.upload(path, {
      folder: folderName,
    });
    imageUrl = url;
    return imageUrl;
  } catch (error) {
    return error;
  }
};
