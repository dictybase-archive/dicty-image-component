# 🖼️ Dicty Image Component

This component makes use of the `picture` element to allow use of [nex-gen](https://web.dev/uses-webp-images/) image formats like `avif` and `webp` that are still unsupported by many browsers. `picture` element allows browsers that support next-gen formats to use these efficient files, while simultaniously supporting older borwsers that do not support these image formats to fallback and use traditional image formats like `png` and `jpeg`.