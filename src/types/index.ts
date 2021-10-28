type PictureSource = {
  srcSet: string
  type: "image/webp" | "image/avif"
  orientation?: "landscape" | "portrait"
}

type DictyImageProps = {
  src: string
  nextGenSources?: PictureSource[]
  alt?: string
  id?: string
  imgClassName?: string
  className?: string
}

export type { PictureSource, DictyImageProps }
