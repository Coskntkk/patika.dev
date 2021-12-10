const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    try {
        const raw = {...req.body, image: `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/500`}
        const newPost = new Post(raw);
        await newPost.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        post.name = req.body.name;
        post.description = req.body.description;
        post.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}