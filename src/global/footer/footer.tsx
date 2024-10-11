import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";

// Data for useful links
const usefulLinks = [
  { name: "Start Here", path: "/start-here" },
  { name: "Blogs", path: "/blogs" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "Career", path: "/career" },
  { name: "Demo Account", path: "/demo-account" },
];

// Data for information links
const informationLinks = [
  { name: "Products", path: "/products" },
  { name: "Membership Levels", path: "/membership-levels" },
  { name: "Purchase Guide", path: "/purchase-guide" },
  { name: "Become a Service Provider", path: "/auth/service-provider-request" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Contact Us", path: "/contact" },
];

// Data for social media icons
const socialMediaLinks = [
  {
    icon: <FaFacebook className="fill-blue-600 text-3xl" />,
    name: "Facebook",
    path: "#",
  },
  {
    icon: <RiWhatsappFill className="text-green-600 text-3xl" />,
    name: "WhatsApp",
    path: "#",
  },
  {
    icon: <FaSquareInstagram className="text-red-500 text-3xl" />,
    name: "Instagram",
    path: "#",
  },
  {
    icon: <BsTwitterX className="text-black text-3xl" />,
    name: "Twitter",
    path: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className= "bg-gray-800 max-w-7xl mx-auto text-white py-10 px-[85px] w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Contact Information Section */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">D L M P</h2>
            <p>
              Call Us: <br /> 0712345678x
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:hello@logisticsplatform.com"
                className="text-orange-500"
              >
                hello@logisticsplatform.com
              </a>
            </p>
            <p>9 AM – 5 PM, Monday – Friday</p>
            <p>PO Box 567 Hostin st. 433, Nairobi</p>
          </div>
          <div className="flex space-x-4 ">
            {socialMediaLinks.map((social) => (
              <div className="p-3 bg-white rounded">
                <Link
                  key={social.name}
                  to={social.path}
                  aria-label={social.name}
                  className="text-white hover:text-orange-500 text-xl"
                >
                  {social.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul>
            {usefulLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-orange-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul>
            {informationLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-orange-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Sign Up for Our Newsletter
          </h3>
          <p className="mb-4">
            Stay updated with the latest in global logistics, trade
            facilitation, and more. Sign up for our newsletter today!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 bg-white text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-00 mt-10 pt-6">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-base">
            &copy; 2024 Digital Logistics Platform. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
