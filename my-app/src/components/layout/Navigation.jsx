export default function Navigation({ mobile = false }) {
  const links = ["Home", "Products", "Features", "About", "Contact"];

  return (
    <nav>
      <ul
        className={`${
          mobile
            ? "flex flex-col space-y-4"
            : "flex space-x-8 items-center"
        } text-white/90`}
      >
        {links.map((link) => (
          <li
            key={link}
            className="relative cursor-pointer transition-all duration-300 hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}
