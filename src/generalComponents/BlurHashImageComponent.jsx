import { useEffect, useState } from "react";
import { Blurhash } from "blurhash";
function BlurHashImageComponent({
  src,
  hash,
  height,
  width,
  borderRadios = "0px",
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: `${borderRadios}`,
            overflow: "hidden",
          }}
        >
          <Blurhash
            hash={hash}
            height={height}
            width={width}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      {imageLoaded && <img src={`${src}`} alt="" />}
    </>
  );
}

export default BlurHashImageComponent;
