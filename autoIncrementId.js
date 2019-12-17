var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');  //step 1 
var ObjectId = require('mongoose').ObjectId;

var commentSchema = new mongoose.Schema({
    userId: { type: Number },
    mediaId: { type: ObjectId },
    comment: { type: String } 
});

autoIncrement.initialize(mongoose.connection);  //step 2

commentSchema.plugin(autoIncrement.plugin, 'comment'); //step 3
mongoose.model('comment', commentSchema);
