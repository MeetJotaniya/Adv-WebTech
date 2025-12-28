import Image from "next/image";

export default function Women() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Women Shoes</h1>

      <div className="product-grid">

        <div className="product-card">
          <Image className="product-image" src="/images/women/197976371835-1.jpg" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Classic Fashion Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/197976864627-1.webp" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Elegant Block Heel Sandals</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/197976864726-1.webp" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Trendy Platform Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/198376627515-1.jpg" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Casual Everyday Flats</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/198376627652-1.webp" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Soft Cushion Walking Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/198376826406-1.webp" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Premium Slip-On Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/198739332223-1.jpg" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Classic Leather Ballet Flats</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/women/199025883771-1.jpg" alt="Women Shoe" width={180} height={180} />
          <p className="product-title">Women’s Retro Chunky Sneakers</p>
        </div>

      </div>
    </div>
  );
}
