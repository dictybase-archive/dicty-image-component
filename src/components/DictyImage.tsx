import React from "react"
import { DictyImageProps } from "../types"

const DictyImage = ({
  src,
  nextGenSources,
  alt,
  id,
  imgClassName,
  className,
}: DictyImageProps) => {
  return (
    <picture className={className}>
      {nextGenSources?.map((s, i) => (
        <source
          media={`(orientation: ${
            s.orientation ? s.orientation : "landscape"
          })`}
          srcSet={s.srcSet}
          type={s.type}
          key={`dictyImg${alt}${i}`}
        />
      ))}
      <img src={src} alt={alt} className={imgClassName} id={id} />
    </picture>
  )
}

export default DictyImage
