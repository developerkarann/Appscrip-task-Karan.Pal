import Link from "next/link";

export default function Footer() {

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SHOP", href: "/shop" },
    { name: "SKILLS", href: "/skills" },
    { name: "STORIES", href: "/stories" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white mt-20">
      {/* Newsletter >>*/}
      <div className="border-b border-gray-700 px-6 lg:px-20 py-8">
        <h3 className="text-lg font-semibold mb-2">BE THE FIRST TO KNOW</h3>
        <p className="text-sm text-gray-400 mb-4">
          Sign up for updates from mettà muse.
        </p>
        <div className="flex max-w-md gap-2">
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className="flex-1 px-4 py-2 bg-white text-gray-500 text-sm rounded"
          />
          <button className="bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-700 rounded">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Footer Content >> */}
      <div className="px-6 lg:px-20 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        <div>
          <h4 className="text-sm font-semibold mb-4">CONTACT US</h4>
          <p className="text-gray-400 text-sm mb-2">+44 221 133 5360</p>
          <p className="text-gray-400 text-sm mb-4">customercare@mettamuse.com</p>

          <h4 className="text-sm font-semibold mb-2">CURRENCY</h4>
          <p className="text-gray-400 text-sm">USD $</p>
          <p className="text-gray-500 text-xs mt-1">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        {/* mettà muse Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">mettà muse</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-gray-400 flex flex-col">
            {
              navLinks.map((link) => (
                <Link key={link.name} href={link.href} >
                  {link.name}
                </Link>
              ))
            }
          </ul>
        </div>

        {/* Follow Us & Payments */}
        <div>
          <h4 className="text-sm font-semibold mb-4">FOLLOW US</h4>
          <div className="flex gap-4 text-2xl mb-4">
            {/* <FaInstagram />
            <FaPinterest /> */}
          </div>
          <h4 className="text-sm font-semibold mb-2">mettà muse ACCEPTS</h4>
          <div className="flex gap-2 flex-wrap">
            {/* <Image src="/payments/applepay.png" alt="Apple Pay" width={40} height={25} />
            <Image src="/payments/googlepay.png" alt="Google Pay" width={40} height={25} />
            <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={25} />
            <Image src="/payments/amex.png" alt="Amex" width={40} height={25} />
            <Image src="/payments/paypal.png" alt="Paypal" width={40} height={25} /> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 lg:px-20 py-4 text-center text-xs text-gray-500">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
