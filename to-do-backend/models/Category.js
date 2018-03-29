const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const categorySchema = Schema({
    name: {
        type: String,
        unique: true,
    }
});

let CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;