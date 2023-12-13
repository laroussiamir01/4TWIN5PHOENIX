const Project = require('../models/projectModel');

async function getAllProjects(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function createProject(req, res) {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


async function updateProject(req, res) {
  try {
    const projectName = req.params.name; // Utiliser le nom au lieu de l'ID
    const updatedProject = await Project.findOneAndUpdate({ name: projectName }, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function  getProjectByName(req, res) {
  const projectName = req.params.name;

  try {
    let project = await Project.findOne({ name: projectName });

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {
    console.error("Error in getProjectByName:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


async function deleteProject(req, res) {
  try {
    const projectName = req.params.name; // Utiliser le nom au lieu de l'ID
    const deletedProject = await Project.findOneAndDelete({ name: projectName });
    if (!deletedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
  getProjectByName,
};
