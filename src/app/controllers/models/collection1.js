var mongoose = require("mongoose");
var slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const collection1 = new Schema(
  {
    name: String,
    image: String,
    scription: String,
    slug: { type: String, slug: "name" },
    srcYoutube: String,
  },
  { timestamps: true }
);

collection1.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("collection1", collection1);
