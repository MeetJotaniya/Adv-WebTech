import Image from "next/image";

export default function Men() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Men Shoes</h1>

      <div className="product-grid">

        <div className="product-card">
          <Image className="product-image" src="/images/men/197627452623-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Classic Leather Derby Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/197976057968-1.jpg" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Premium Running Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/197976058101-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Lightweight Sports Trainers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/199025074315-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s High-Top Streetwear Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/199025413435-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Casual Slip-On Loafers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/197976939813-1.jpg" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Formal Oxford Dress Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/198376276560-1.jpg" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Outdoor Trekking Boots</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/198376633233-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Breathable Mesh Walking Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/198739768015-1.jpg" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Retro Court Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/men/199025007313-1.webp" alt="Men Shoe" width={180} height={180} />
          <p className="product-title">Men’s Memory-Foam Comfort Sandals</p>
        </div>

      </div>
    </div>
  );
}
