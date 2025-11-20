# WebP Image Conversion - Quick Start Guide

## 🚀 Quick Setup

### Step 1: Install Sharp
```bash
cd scripts
npm install
```

### Step 2: Run Conversion
```bash
npm run convert-to-webp
```

That's it! The script will:
- ✅ Find all PNG/JPG images in `src/assets`
- ✅ Convert them to WebP format (85% quality)
- ✅ Show you the file size savings
- ✅ Skip files that were already converted

## 📋 What You'll See

```
🚀 WebP Batch Converter Starting...

📁 Input Directory: ./src/assets
🎨 Quality: 85
⚙️  Effort: 6

────────────────────────────────────────────────────────────
✅ Converted: hero-person-new.png
   156.3KB → 47.2KB (69.8% smaller)

✅ Converted: brand-icon-vibrant.png
   89.1KB → 21.4KB (76.0% smaller)

⏭️  Skipped: evan-tsaboukos.webp (already exists)

📊 Conversion Summary:
   Total images found: 87
   ✅ Converted: 82
   ⏭️  Skipped: 5
   ❌ Failed: 0

💾 Storage Savings:
   Original size: 8.42 MB
   WebP size: 2.58 MB
   Saved: 5.84 MB (69.3%)

⏱️  Completed in 12.34 seconds

✨ Done! WebP images are ready to use.
```

## 🎨 Quality Options

### Default (Quality 85) - Recommended
```bash
npm run convert-to-webp
```
- Best balance of quality and file size
- ~70% smaller than PNG
- Visually indistinguishable from original

### High Quality (Quality 90)
```bash
npm run convert-to-webp:quality90
```
- Maximum quality
- ~60% smaller than PNG
- Perfect for hero images and key visuals

### Smaller Files (Quality 80)
```bash
npm run convert-to-webp:quality80
```
- Smaller file sizes
- ~75% smaller than PNG
- Good for logos and icons

## 📁 What Gets Converted

The script automatically finds and converts:

```
src/assets/
├── hero-person-new.png        → hero-person-new.webp
├── brand-icon-vibrant.png     → brand-icon-vibrant.webp
├── logos/
│   ├── client-logo.png        → client-logo.webp
│   └── partner-logo.png       → partner-logo.webp
├── media/
│   ├── fox40-logo.png         → fox40-logo.webp
│   └── msn-logo.png           → msn-logo.webp
└── locations/
    ├── sydney-harbor.jpg      → sydney-harbor.webp
    └── melbourne-skyline.jpg  → melbourne-skyline.webp
```

## ✅ After Conversion

Your images are automatically optimized! The website will:

1. **Serve WebP to modern browsers** (70% smaller!)
2. **Fallback to PNG/JPG for older browsers** (100% compatible)
3. **No code changes needed** - it just works!

## 🔄 Re-running the Script

Safe to run multiple times:
- ✅ Skips already-converted images
- ✅ Only processes new images
- ✅ Won't duplicate work

## 🐛 Troubleshooting

### "sharp not found"
```bash
cd scripts
npm install sharp
```

### "Directory not found"
Check you're in the project root:
```bash
cd ..  # Go back to project root
cd scripts
npm run convert-to-webp
```

### Permission errors
On Linux/Mac:
```bash
chmod +x scripts/convert-to-webp.js
```

## 📊 Expected Results

Based on typical website assets:

| Image Type | Original | WebP | Savings |
|------------|----------|------|---------|
| Hero Images | 150KB | 45KB | 70% |
| Logos | 80KB | 19KB | 76% |
| Team Photos | 200KB | 58KB | 71% |
| Icons | 30KB | 7KB | 77% |
| **Total Site** | **~8MB** | **~2.4MB** | **~70%** |

## 🎯 Next Steps

After conversion:
1. ✅ Test your site - images should load normally
2. ✅ Check PageSpeed Insights - should see improved scores
3. ✅ Monitor Core Web Vitals - faster LCP times
4. ✅ Verify in DevTools Network tab - WebP files loading

## 💡 Tips

**For new images:**
1. Add PNG/JPG as normal to `src/assets`
2. Run `npm run convert-to-webp`
3. Commit both PNG and WebP files

**Customizing quality:**
Edit `scripts/convert-to-webp.js`:
```javascript
const CONFIG = {
  quality: 85,  // Change this (0-100)
  effort: 6,    // Or this (0-6)
  // ...
};
```

## 🔗 Resources

- [WebP Image Format](https://developers.google.com/speed/webp)
- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [Browser Support](https://caniuse.com/webp)

---

**Need help?** Check the full guide in `WEBP_OPTIMIZATION_GUIDE.md`
