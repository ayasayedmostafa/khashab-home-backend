const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    enum: ['hospitality', 'residential', 'office', 'retail', 'healthcare'],
    required: true
  },
  workType: {
    type: String,
    enum: ['wall-cladding', 'custom-furniture', 'kitchens-closets', 'doors-facades', 'office-fitout'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);