import clsx from "clsx"

export function Screenshot({ src, alt, caption, type }) {
  return (
    <figure className={type}>
      <img alt={alt} src={src} style={{ width: "100%" }} />
      <figcaption className={clsx("text-gray-500", "text-center italic")}>{caption}</figcaption>
    </figure>
  )
}
