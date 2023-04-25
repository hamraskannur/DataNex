const imgSchema = require("../models/image");

exports.saveImg = async (req, res, next) => {
  try {
    console.log(req.file);
    const url = req.protocol + "://" + req.get("host");

    const img = new imgSchema({
      image: url + "/" + req.file.filename
    });
    await img.save();
 console.log(img);
    res.json(img);
  } catch (error) {
    console.log(error);
  }
};

exports.getImg = async (req, res, next) => {
  try {
    const images = await imgSchema.find({});
    res.json({ images });
  } catch (error) {
    console.log(error);
  }
};
