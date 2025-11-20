const fs = require('fs');
const path = require('path');

const CONFIG = {
  srcDir: path.join(__dirname, '../src'),
  extensions: ['.tsx', '.jsx'],
  dryRun: process.argv.includes('--dry-run'),
};

const stats = {
  filesScanned: 0,
  filesModified: 0,
  imagesReplaced: 0,
};

/**
 * Determine appropriate sizes attribute based on context
 */
function getSizesAttribute(className = '', componentName = '') {
  const lower = (className + ' ' + componentName).toLowerCase();
  
  if (lower.includes('hero')) return '100vw';
  if (lower.includes('logo')) return '(max-width: 768px) 100px, 200px';
  if (lower.includes('thumbnail') || lower.includes('avatar')) return '(max-width: 768px) 150px, 300px';
  if (lower.includes('icon')) return '(max-width: 768px) 50px, 100px';
  
  return '(max-width: 768px) 100vw, 50vw';
}

/**
 * Replace img tags with OptimizedImage
 */
function replaceImageTags(content, filePath) {
  let modified = false;
  let replacements = 0;

  // Check if OptimizedImage is already imported
  const hasOptimizedImageImport = content.includes('OptimizedImage');
  
  // Pattern to match img tags (basic approach)
  const imgRegex = /<img\s+([^>]*?)src=\{([^}]+)\}([^>]*?)\/>/g;
  const pictureImageRegex = /<PictureImage\s+([^>]*?)\/>/g;

  // Replace <img> tags
  let newContent = content.replace(imgRegex, (match, before, srcValue, after) => {
    // Extract props
    const altMatch = (before + after).match(/alt=["']([^"']+)["']/);
    const classMatch = (before + after).match(/className=["']([^"']+)["']/);
    const widthMatch = (before + after).match(/width=\{?(\d+|["'][^"']+["'])\}?/);
    const heightMatch = (before + after).match(/height=\{?(\d+|["'][^"']+["'])\}?/);
    const loadingMatch = (before + after).match(/loading=["']([^"']+)["']/);
    
    const alt = altMatch ? altMatch[1] : 'Image';
    const className = classMatch ? classMatch[1] : '';
    const width = widthMatch ? widthMatch[1] : undefined;
    const height = heightMatch ? heightMatch[1] : undefined;
    const priority = loadingMatch && loadingMatch[1] === 'eager';
    
    const sizes = getSizesAttribute(className);
    
    // Build OptimizedImage props
    let props = [];
    props.push(`src={${srcValue}}`);
    props.push(`alt="${alt}"`);
    if (sizes) props.push(`sizes="${sizes}"`);
    if (priority) props.push(`priority`);
    if (width) props.push(`width={${width}}`);
    if (height) props.push(`height={${height}}`);
    if (className) props.push(`className="${className}"`);
    
    // Preserve other props
    const otherProps = (before + after)
      .replace(/alt=["'][^"']+["']/g, '')
      .replace(/className=["'][^"']+["']/g, '')
      .replace(/width=\{?\d+\}?/g, '')
      .replace(/height=\{?\d+\}?/g, '')
      .replace(/loading=["'][^"']+["']/g, '')
      .trim();
    
    if (otherProps) props.push(otherProps);
    
    replacements++;
    modified = true;
    return `<OptimizedImage ${props.join(' ')} />`;
  });

  // Replace <PictureImage> tags
  newContent = newContent.replace(pictureImageRegex, (match) => {
    // Extract src to determine sizes
    const srcMatch = match.match(/src=\{([^}]+)\}/);
    const classMatch = match.match(/className=["']([^"']+)["']/);
    const className = classMatch ? classMatch[1] : '';
    const sizes = getSizesAttribute(className);
    
    // Add sizes prop if not present
    if (!match.includes('sizes=')) {
      const modifiedMatch = match.replace('/>', ` sizes="${sizes}" />`);
      const finalMatch = modifiedMatch.replace('<PictureImage', '<OptimizedImage');
      replacements++;
      modified = true;
      return finalMatch;
    }
    
    replacements++;
    modified = true;
    return match.replace('<PictureImage', '<OptimizedImage');
  });

  // Add import if needed and modifications were made
  if (modified && !hasOptimizedImageImport) {
    // Find last import statement
    const importRegex = /import\s+.*?from\s+['"].*?['"];?\n/g;
    const imports = newContent.match(importRegex) || [];
    const lastImport = imports[imports.length - 1];
    
    if (lastImport) {
      const importStatement = "import { OptimizedImage } from '@/components/OptimizedImage';\n";
      newContent = newContent.replace(lastImport, lastImport + importStatement);
    }
  }

  // Update PictureImage import to OptimizedImage
  newContent = newContent.replace(
    /import\s+\{\s*PictureImage\s*\}\s+from\s+['"]@\/components\/PictureImage['"]/g,
    "import { OptimizedImage } from '@/components/OptimizedImage'"
  );

  if (modified) {
    console.log(`✓ ${path.relative(CONFIG.srcDir, filePath)}: ${replacements} image(s) migrated`);
    stats.filesModified++;
    stats.imagesReplaced += replacements;
  }

  return { newContent, modified };
}

/**
 * Process file
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  stats.filesScanned++;

  // Skip if no img or PictureImage tags
  if (!content.includes('<img') && !content.includes('<PictureImage')) {
    return;
  }

  const { newContent, modified } = replaceImageTags(content, filePath);

  if (modified && !CONFIG.dryRun) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }
}

/**
 * Recursively process directory
 */
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip node_modules and build directories
    if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'build') {
      continue;
    }

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (CONFIG.extensions.includes(ext)) {
        processFile(fullPath);
      }
    }
  }
}

/**
 * Main execution
 */
function main() {
  console.log('\n🔄 Migrating to OptimizedImage Component\n');
  
  if (CONFIG.dryRun) {
    console.log('⚠️  DRY RUN MODE - No files will be modified\n');
  }

  processDirectory(CONFIG.srcDir);

  console.log('\n' + '='.repeat(60));
  console.log('Migration Complete!');
  console.log('='.repeat(60));
  console.log(`Files scanned: ${stats.filesScanned}`);
  console.log(`Files modified: ${stats.filesModified}`);
  console.log(`Images replaced: ${stats.imagesReplaced}`);
  
  if (CONFIG.dryRun) {
    console.log('\n⚠️  This was a dry run. Run without --dry-run to apply changes.');
  } else {
    console.log('\n✨ Migration complete! Review changes and test thoroughly.');
  }
  
  console.log('\n');
}

main();
