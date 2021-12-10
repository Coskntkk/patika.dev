const Post = require('../models/Post');

exports.getIndexPage = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('index', {posts});
    } catch (error) {
        res.send(error);
    }
}