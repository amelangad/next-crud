import mongoose, {Schema} from 'mongoose';

const postSchema = new Schema ({
title: String,
description: String,
author: String,
year: Number,
},
{
timestamps: true
}
)

const Post = mongoose.models.Post|| mongoose.model("Post", postSchema);

export default Post;