const Project = require('../models/Project');

exports.getIndexPage = async (req, res) => {
    try {
        const projects = await Project.find({});
        res.render('index', {projects});
    } catch (error) {
        res.send(error);
    }
}

exports.createProject = async (req, res) => {
    try {
        const raw = {...req.body, image: `https://picsum.photos/id/${Math.floor(Math.random()*1000)}/500`}
        const newProject = new Project(raw);
        await newProject.save();
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
}

exports.updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, description, category} = req.body;
        await Project.findByIdAndUpdate(id, {name, description, category});
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
}

exports.deleteProject = async (req, res) => {
    try {
        const {id} = req.params;
        await Project.findByIdAndDelete(id);
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
}