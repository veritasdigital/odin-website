const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  quality: 85,      // WebP quality (0-100)
  effort: 6,        // Compression effort (0-6, higher = better compression)
  inputDir: './src/assets',
  extensions: ['.png', '.jpg', '.jpeg'],
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
 * Convert a single image to WebP format
 */
async function convertToWebP(inputPath) {
  const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Skipped: ${path.basename(outputPath)} (already exists)`);
    stats.skipped++;
    return;
  }
  
  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    stats.originalSize += originalStats.size;
    
    // Convert to WebP
    await sharp(inputPath)
      .webp({ 
        quality: CONFIG.quality,
        effort: CONFIG.effort,
      })
      .toFile(outputPath);
    
    // Get WebP file size
    const webpStats = fs.statSync(outputPath);
    stats.webpSize += webpStats.size;
    
    // Calculate savings
    const savings = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);
    const originalSizeKB = (originalStats.size / 1024).toFixed(1);
    const webpSizeKB = (webpStats.size / 1024).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(inputPath)}`);
    console.log(`   ${originalSizeKB}KB → ${webpSizeKB}KB (${savings}% smaller)`);
    
    stats.converted++;
  } catch (error) {
    console.error(`❌ Failed: ${path.basename(inputPath)}`);
    console.error(`   Error: ${error.message}`);
    stats.failed++;
  }
}

/**
 * Recursively process all images in a directory
 */
async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else {
      // Check if file has a supported extension
      const ext = path.extname(file).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        stats.total++;
        await convertToWebP(fullPath);
      }
    }
  }
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 WebP Batch Converter Starting...\n');
  console.log(`📁 Input Directory: ${CONFIG.inputDir}`);
  console.log(`🎨 Quality: ${CONFIG.quality}`);
  console.log(`⚙️  Effort: ${CONFIG.effort}\n`);
  console.log('─'.repeat(60));
  
  const startTime = Date.now();
  
  await processDirectory(CONFIG.inputDir);
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log('─'.repeat(60));
  console.log('\n📊 Conversion Summary:');
  console.log(`   Total images found: ${stats.total}`);
  console.log(`   ✅ Converted: ${stats.converted}`);
  console.log(`   ⏭️  Skipped: ${stats.skipped}`);
  console.log(`   ❌ Failed: ${stats.failed}`);
  
  if (stats.converted > 0) {
    const totalSavings = ((stats.originalSize - stats.webpSize) / stats.originalSize * 100).toFixed(1);
    console.log(`\n💾 Storage Savings:`);
    console.log(`   Original size: ${formatBytes(stats.originalSize)}`);
    console.log(`   WebP size: ${formatBytes(stats.webpSize)}`);
    console.log(`   Saved: ${formatBytes(stats.originalSize - stats.webpSize)} (${totalSavings}%)`);
  }
  
  console.log(`\n⏱️  Completed in ${duration} seconds`);
  console.log('\n✨ Done! WebP images are ready to use.');
  console.log('   Images will automatically fall back to original format when needed.\n');
}

// Run the script
main().catch(error => {
  console.error('\n❌ Fatal Error:', error.message);
  process.exit(1);
});
