import React from "react";

const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "#" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "contact" },
  ];

  const contactInfo = [
    {
      type: "Address",
      value: "Pastor Square, Somalia St., Filix Pharmacy",
    },
    { type: "Phone", value: "+251-9145-678-901" },
    { type: "Email", value: "contact@pharmawholesale.com" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-[#2B4262] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Filix Pharmacy</h2>
          <p className="text-sm">
            Your trusted partner in pharmacy wholesale. Providing quality
            medicines at competitive prices, ensuring the best service for
            pharmacies nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          {contactInfo.map((info, index) => (
            <p className="text-sm mt-2" key={index}>
              <strong>{info.type}:</strong> {info.value}
            </p>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center text-sm">
        <p>&copy; 2024 Pharma Wholesale. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {policies.map((policy, index) => (
            <React.Fragment key={index}>
              <a href={policy.href} className="hover:text-gray-300">
                {policy.name}
              </a>
              {index < policies.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
