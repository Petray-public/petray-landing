import { brandLogos, type BrandId } from "@/lib/site-data";

export function BrandLogo({ brand }: { brand: BrandId }) {
  const logo = brandLogos[brand];
  return (
    <span className={`original-logo logo-${brand}`}>
      <img className={logo.darkSrc ? "logo-light-asset" : undefined} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
      {logo.darkSrc && <img className="logo-dark-asset" src={logo.darkSrc} alt={logo.alt} width={logo.width} height={logo.height} />}
    </span>
  );
}
