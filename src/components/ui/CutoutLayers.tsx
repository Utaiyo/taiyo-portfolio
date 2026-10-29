import Image from "next/image";
import type { ImageAsset } from "@/content/profile";
import clsx from "./clsx";

type Props = {
  image: ImageAsset;
  /** 後ろにずらして重ねる色シルエットの色 */
  layerColor?: string;
  /** シルエットをずらす量（% / 画像サイズ基準） */
  offsetX?: number;
  offsetY?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * 切り抜き写真のレイヤー演出。
 * 写真の形をマスクにした色シルエット（網点入り）を後ろにずらして重ね、版ズレした印刷物のような奥行きを出す。
 */
export function CutoutLayers({
  image,
  layerColor = "#e5432a",
  offsetX = -5,
  offsetY = 2,
  priority,
  sizes,
  className,
}: Props) {
  const mask = {
    WebkitMaskImage: `url(${image.src})`,
    maskImage: `url(${image.src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  } as const;

  return (
    <div className={clsx("relative h-full w-max", className)}>
      {/* レイヤー1：色シルエット＋網点 */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          ...mask,
          transform: `translate(${offsetX}%, ${offsetY}%)`,
          backgroundColor: layerColor,
          backgroundImage: "radial-gradient(rgba(20,20,20,.28) 1.1px, transparent 1.5px)",
          backgroundSize: "7px 7px",
        }}
      />
      {/* レイヤー2：写真本体 */}
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        priority={priority}
        sizes={sizes}
        className="relative h-full w-auto max-w-none"
      />
    </div>
  );
}
