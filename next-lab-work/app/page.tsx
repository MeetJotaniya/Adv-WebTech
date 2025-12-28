import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Image
        src="/images/OIP (1).jpeg"
        alt="........."
        width={180}
        height={180}
        priority
      /> 
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/OIP.jpeg"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/51Bl78xnnpL._AC_UL480_FMwebp_QL65_.webp"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <br />
      <hr />
      <Image
        src="/images/OIP (2).jpeg"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/th (1).jpeg"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/th.jpeg"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/6157WaPyAyL._AC_UL480_FMwebp_QL65_.webp"
        alt="........."
        width={180}
        height={180}
        priority
      />
      <Image
        style={{ marginLeft: "50px" }}
        src="/images/71Ni5k2CTcL._AC_UL480_FMwebp_QL65_.webp"
        alt="........."
        width={180}
        height={180}
        priority
      />
      
    </div>
  );
}
