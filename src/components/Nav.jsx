import { Link, NavLink } from "react-router-dom";
const link = ({isActive}) => "px-3 py-2 rounded-xl " + (isActive?"bg-black text-white":"hover:bg-gray-100");
export default function Nav(){
  return (
    <header className="max-w-6xl mx-auto p-4 flex items-center justify-between">
      <Link to="/" className="font-bold text-xl">Clement Tetteh</Link>
      <nav className="flex gap-2">
        <NavLink end to="/" className={link}>Home</NavLink>
        <NavLink to="/projects" className={link}>Projects</NavLink>
        <NavLink to="/about" className={link}>About</NavLink>
        <NavLink to="/contact" className={link}>Contact</NavLink>
      </nav>
    </header>
  );
}
