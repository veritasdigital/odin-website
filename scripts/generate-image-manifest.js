const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const CONFIG = {
  inputDir: path.join(__dirname, '../src/assets'),
  outputFile: path.join(__dirname, '../src/data/image-manifest.json'),
  extensions: ['.jpg', '.jpeg', '.png'],
  sizes: [320, 640, 768, 1024, 1280, 1920],
};

const manifest = {};

/**
 * Scan directory and build manifest
 */
async function scanDirectory(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await scanDirectory(fullPath, baseDir);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        await processImage(fullPath, baseDir);
      }
    }
  }
}

/**
 * Process individual image
 */
async function processImage(imagePath, baseDir) {
  const ext = path.extname(imagePath).toLowerCase();
  const baseName = path.basename(imagePath, ext);
  const dirName = path.dirname(imagePath);
  const relativePath = path.relative(baseDir, imagePath).replace(/\\/g, '/');

  try {
    // Get original image dimensions
    const metadata = await sharp(imagePath).metadata();
    
    // Build manifest entry
    const entry = {
      original: {
        path: `/src/assets/${relativePath}`,
        width: metadata.width,
        height: metadata.height,
        format: ext.slice(1),
      },
      webp: {
        full: null,
        srcset: [],
      },
    };

    // Check for full-size WebP
    const webpPath = path.join(dirName, `${baseName}.webp`);
    if (fs.existsSync(webpPath)) {
      const webpRelative = path.relative(baseDir, webpPath).replace(/\\/g, '/');
      entry.webp.full = `/src/assets/${webpRelative}`;
    }

    // Check for responsive sizes
    for (const size of CONFIG.sizes) {
      const sizePath = path.join(dirName, `${baseName}-${size}w.webp`);
      if (fs.existsSync(sizePath)) {
        const sizeRelative = path.relative(baseDir, sizePath).replace(/\\/g, '/');
        const sizeMetadata = await sharp(sizePath).metadata();
        entry.webp.srcset.push({
          width: size,
          actualWidth: sizeMetadata.width,
          path: `/src/assets/${sizeRelative}`,
        });
      }
    }

    // Only add to manifest if WebP exists
    if (entry.webp.full || entry.webp.srcset.length > 0) {
      manifest[relativePath] = entry;
    }

  } catch (error) {
    console.error(`Error processing ${imagePath}:`, error.message);
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('\n📋 Generating Image Manifest\n');

  // Ensure output directory exists
  const outputDir = path.dirname(CONFIG.outputFile);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await scanDirectory(CONFIG.inputDir);

  // Write manifest
  fs.writeFileSync(
    CONFIG.outputFile,
    JSON.stringify(manifest, null, 2),
    'utf-8'
  );

  console.log(`✓ Manifest generated: ${CONFIG.outputFile}`);
  console.log(`✓ Processed ${Object.keys(manifest).length} images`);
  console.log('\n✨ Done! You can now use OptimizedImage component\n');
}

main().catch(console.error);
