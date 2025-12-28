import Image from "next/image";

export default function Kids() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Kids Shoes</h1>

      <div className="product-grid">

        <div className="product-card">
          <Image className="product-image" src="/images/kids/310321L-1.webp" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Stylish Velcro Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/196642593618-1.jpg" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Running Sports Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/197976670266-1.webp" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Lightweight Athletic Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/198376415310-1.octet-stream" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ GO RUN 400</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/198376415518-1.octet-stream" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Comfort Slip-On Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/198376537197-1.octet-stream" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Outdoor Walking Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/198376638498-1.jpg" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Funky Printed Sneakers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/199025216487-1.jpg" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Stylish Mesh Trainers</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/199025217507-1.jpeg" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Casual Play Shoes</p>
        </div>

        <div className="product-card">
          <Image className="product-image" src="/images/kids/199025699204-1.jpeg" alt="Kids Shoe" width={180} height={180} />
          <p className="product-title">Kids’ Ultra-Soft Running Shoes</p>
        </div>

      </div>
    </div>
  );
}
