const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: Date,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
