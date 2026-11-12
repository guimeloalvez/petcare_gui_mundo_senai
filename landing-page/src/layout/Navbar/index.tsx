import { MdOutlinePets } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import Button from "../../components/Button";

export default function Navbar() {
  return (
    <header className="px-5 md:px-20 py-6 flex justify-between border-b border-b-[#ccc]">
      <div className="flex gap-2 items-start">
        <MdOutlinePets size={24} color="#3F9271" />

        <p className="font-black text-[#153229]">pet</p>
        <p className="font-black text-[#FF6B4A]">care</p>
      </div>

      <nav>
        <ul className="flex items-center gap-5 md:gap-10 ">
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Inicio
            </a>
          </li>
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Funcionalidade
            </a>
          </li>
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <a>
        <Button
          text="Agendar Consulta"
          text_color="text-white"
          background="hidden md:block px-6 py-2.5 rounded-full shadow-xl/30"
          fontsize=""
          background_color="bg-[#153229]"
          link="/"
        />
      </a>

      <div className="block md:hidden bg-[#153229] p-2 rounded-full">
        <a>
          <LuCalendarDays color="#fff" size={14} />
        </a>
      </div>
    </header>
  );
}
