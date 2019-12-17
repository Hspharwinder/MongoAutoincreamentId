# MongoAutoincreamentId
Auto generate and increment tableId 

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var ObjectId = require('mongoose').ObjectId;

var commentSchema = new mongoose.Schema({
    userId: { type: Number },
    mediaId: { type: ObjectId },
    comment: { type: String } 
});

autoIncrement.initialize(mongoose.connection);

commentSchema.plugin(autoIncrement.plugin, 'comment');
mongoose.model('comment', commentSchema);
