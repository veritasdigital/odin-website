const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function removeDuplicateImports(content) {
  // Remove duplicate OptimizedImage imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const filteredLines = [];
  
  for (const line of lines) {
    if (line.includes("import { OptimizedImage } from '@/components/OptimizedImage'")) {
      if (!seenImports.has('OptimizedImage')) {
        seenImports.add('OptimizedImage');
        filteredLines.push(line);
      }
    } else {
      filteredLines.push(line);
    }
  }
  
  return filteredLines.join('\n');
}

function fixAttributeErrors(content) {
  // Fix duplicate alt attributes
  content = content.replace(/alt="[^"]*"\s+sizes="[^"]*"\s+([^>]*)alt="[^"]*"/g, (match, middle) => {
    const firstAlt = match.match(/alt="([^"]*)"/)?.[1] || '';
    return `sizes="(max-width: 768px) 100vw, 50vw" ${middle.trim()}`.replace(/\s+/g, ' ');
  });
  
  // Fix string width/height to numbers
  content = content.replace(/width=["'](\d+)["']/g, 'width={$1}');
  content = content.replace(/height=["'](\d+)["']/g, 'height={$1}');
  
  return content;
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    const original = content;
    
    content = removeDuplicateImports(content);
    content = fixAttributeErrors(content);
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing OptimizedImage errors...\n');
const fixedCount = processDirectory(srcDir);
console.log(`\nFixed ${fixedCount} files`);
