import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC_DIR = path.resolve(__dirname, '../../img')
const OUT_DIR = path.resolve(__dirname, '../src/assets/photos')

const MAP = [
  ['Image.jpeg', 'image.webp'],
  ['Image (1).jpeg', 'image-01.webp'],
  ['Image-1.jpeg', 'image-1.webp'],
  ['Image-1 (1).jpeg', 'image-1-01.webp'],
  ['Image-1-5.jpeg', 'image-1-5.webp'],
  ['Image-1-7.jpeg', 'image-1-7.webp'],
  ['Image-2.jpeg', 'image-2.webp'],
  ['Image-5.jpeg', 'image-5.webp'],
  ['Image-6.jpeg', 'image-6.webp'],
  ['image-10.jpeg', 'image-10.webp'],
  ['image-12.jpeg', 'image-12.webp'],
  ['image-14.jpeg', 'image-14.webp'],
  ['image-15.jpeg', 'image-15.webp'],
  ['image-17.jpeg', 'image-17.webp'],
  ['image-dog.jpeg', 'image-dog.webp'],
  ['image-family.jpeg', 'image-family.webp'],
  ['image-girls.jpeg', 'image-girls.webp'],
]

await mkdir(OUT_DIR, { recursive: true })

let totalBefore = 0
let totalAfter = 0

for (const [src, out] of MAP) {
  const inputPath = path.join(SRC_DIR, src)
  const outputPath = path.join(OUT_DIR, out)

  const before = (await sharp(inputPath).metadata()).size ?? 0
  await sharp(inputPath)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outputPath)

  const afterStat = await sharp(outputPath).metadata()
  const afterSize = afterStat.size ?? 0
  totalBefore += before
  totalAfter += afterSize
  console.log(`${src} -> ${out}`)
}

await copyFile(path.join(SRC_DIR, 'logo.jpg'), path.join(OUT_DIR, 'logo.jpg'))
console.log('logo.jpg -> logo.jpg (copied, not re-encoded)')

console.log('Done.')
