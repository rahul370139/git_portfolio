const sharp = require('sharp');
const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function optimizeImages() {
  try {
    // Get all PNG and JPG files in work and projects directories
    const workImages = glob.sync('assets/work/*.{png,jpg}');
    const projectImages = glob.sync('assets/projects/*.{png,jpg}');

    // Process work images (1200x800)
    for (const image of workImages) {
      const tempFile = image.replace(/\.[^/.]+$/, '.temp.png');
      await sharp(image)
        .resize(1200, 800, { fit: 'inside' })
        // .flip() // Flipping is now disabled
        .png({ quality: 80 })
        .toFile(tempFile);
      await fsp.rename(tempFile, image.replace(/\.[^/.]+$/, '.png'));
    }

    // Process project images (1200x800)
    for (const image of projectImages) {
      const tempFile = image.replace(/\.[^/.]+$/, '.temp.png');
      await sharp(image)
        .resize(1200, 800, { fit: 'inside' })
        // .flip() // Flipping is now disabled
        .png({ quality: 80 })
        .toFile(tempFile);
      await fsp.rename(tempFile, image.replace(/\.[^/.]+$/, '.png'));
    }

    // Process preview image (400x400)
    if (fs.existsSync('assets/preview.png')) {
      const tempFile = 'assets/preview.temp.png';
      await sharp('assets/preview.png')
        .resize(400, 400)
        // .flip() // Flipping is now disabled
        .png({ quality: 80 })
        .toFile(tempFile);
      await fsp.rename(tempFile, 'assets/preview.png');
    }

    // Process rahul.png
    if (fs.existsSync('assets/rahul.png')) {
      const tempFile = 'assets/rahul.temp.png';
      await sharp('assets/rahul.png')
        // .flip() // Flipping is now disabled
        .png({ quality: 80 })
        .toFile(tempFile);
      await fsp.rename(tempFile, 'assets/rahul.png');
    }

    // Process resume.pdf (if needed)
    if (fs.existsSync('assets/resume.pdf')) {
      // Assuming resume.pdf is already optimized or doesn't need optimization
      console.log('Resume PDF is already optimized or does not require optimization.');
    }

    console.log('Image optimization complete! Original images have been replaced with optimized versions.');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeImages(); 