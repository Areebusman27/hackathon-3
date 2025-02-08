import Image from 'next/image';
import Link from 'next/link';
import Logo from './Meubel House_Logos-05.png'
import account from "./mdi_account-alert-outline.png"
import cart from "./Vector (4).png"
import heart from "./Vector (5).png"
import search from "./Vector (6).png"


export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Image src={Logo} alt=''></Image>
          <h2>FURNIRO</h2>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
        <Link href="../pages/shop" >Shop</Link>
          <Link href="../pages/contact">Contact</Link>
          <Link href="../pages/about">About</Link>
        </div>
        <div className="navbar-icons">
         <Link href=""><Image src={account} alt='aa'  width={28} height={28}></Image></Link>
         <Link href="../pages/productview"><Image src={search} alt="Heart" width={28} height={28} /></Link> 
         <Link href=""><Image src={heart} alt="Heart" width={28} height={28} /></Link> 
         <Link href="../pages/cart"><Image src={cart} alt="Account" width={28} height={28} /></Link> 
        </div>
      </nav>
    </div>
  );
}
