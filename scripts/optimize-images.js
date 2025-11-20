const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  quality: parseInt(process.argv.find(arg => arg.startsWith('--quality='))?.split('=')[1]) || 80,
  effort: 6,
  inputDir: path.join(__dirname, '../src/assets'),
  sizes: [320, 640, 768, 1024, 1280, 1920],
  extensions: ['.jpg', '.jpeg', '.png'],
};

// Statistics
const stats = {
  total: 0,
  converted: 0,
  skipped: 0,
  failed: 0,
  originalSize: 0,
  webpSize: 0,
};

/**
 * Convert image to WebP and generate multiple sizes
 */
async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const dirName = path.dirname(inputPath);

  try {
    // Get original image metadata
    const metadata = await sharp(inputPath).metadata();
    const originalWidth = metadata.width;
    const originalSize = fs.statSync(inputPath).size;
    
    stats.originalSize += originalSize;

    // Generate full-size WebP
    const webpPath = path.join(dirName, `${baseName}.webp`);
    if (!fs.existsSync(webpPath)) {
      await sharp(inputPath)
        .webp({ quality: CONFIG.quality, effort: CONFIG.effort })
        .toFile(webpPath);
      
      const webpSize = fs.statSync(webpPath).size;
      stats.webpSize += webpSize;
      
      console.log(`✓ ${baseName}${ext} → ${baseName}.webp`);
      console.log(`  ${formatBytes(originalSize)} → ${formatBytes(webpSize)} (${Math.round((1 - webpSize/originalSize) * 100)}% savings)`);
      stats.converted++;
    } else {
      console.log(`⊘ ${baseName}.webp already exists (skipped)`);
      stats.skipped++;
      stats.webpSize += fs.statSync(webpPath).size;
    }

    // Generate responsive sizes
    for (const size of CONFIG.sizes) {
      if (size >= originalWidth) continue; // Skip if size is larger than original

      const sizePath = path.join(dirName, `${baseName}-${size}w.webp`);
      if (!fs.existsSync(sizePath)) {
        await sharp(inputPath)
          .resize(size, null, {
            fit: 'inside',
            withoutEnlargement: true,
            kernel: sharp.kernel.lanczos3,
          })
          .webp({ quality: CONFIG.quality, effort: CONFIG.effort })
          .toFile(sizePath);
        
        const sizeFileSize = fs.statSync(sizePath).size;
        stats.webpSize += sizeFileSize;
        console.log(`  ↳ ${size}w: ${formatBytes(sizeFileSize)}`);
      }
    }

  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
    stats.failed++;
  }
}

/**
 * Recursively process directory
 */
async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        stats.total++;
        await optimizeImage(fullPath);
      }
    }
  }
}

/**
 * Format bytes to human-readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Main execution
 */
async function main() {
  console.log('\n🖼️  Image Optimization Script\n');
  console.log('Configuration:');
  console.log(`  Quality: ${CONFIG.quality}%`);
  console.log(`  Effort: ${CONFIG.effort}`);
  console.log(`  Input: ${CONFIG.inputDir}`);
  console.log(`  Sizes: ${CONFIG.sizes.join(', ')}w`);
  console.log('\nProcessing images...\n');

  const startTime = Date.now();
  await processDirectory(CONFIG.inputDir);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log('\n' + '='.repeat(60));
  console.log('Optimization Complete!');
  console.log('='.repeat(60));
  console.log(`Total images found: ${stats.total}`);
  console.log(`Converted: ${stats.converted}`);
  console.log(`Skipped (already exist): ${stats.skipped}`);
  console.log(`Failed: ${stats.failed}`);
  console.log(`\nOriginal size: ${formatBytes(stats.originalSize)}`);
  console.log(`WebP size: ${formatBytes(stats.webpSize)}`);
  console.log(`Savings: ${formatBytes(stats.originalSize - stats.webpSize)} (${Math.round((1 - stats.webpSize/stats.originalSize) * 100)}%)`);
  console.log(`\nTime: ${duration}s`);
  console.log('\n✨ Run "npm run generate:manifest" to create the image manifest\n');
}

main().catch(console.error);
