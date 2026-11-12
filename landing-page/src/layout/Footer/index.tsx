import { CiInstagram } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#153229] p-10">
      <div className="grid grid-cols-5 justify-items-center items-center pb-10 border-b border-[#ccc]">
        <div>
          <div className="flex items-center gap-2">
            <MdOutlinePets size={24} color="#fff" />
            <span className="text-[20px] font-black text-white">pet</span>
            <span className="text-[20px] font-black text-[#FF6B4A]">care</span>
          </div>
          <p className="text-[#ccc] mt-4 text-sm">
            Uma plataforma para cuidar de quem não pode pedir por cuidado. Feito
            por tutores, pra tutores
          </p>
        </div>
        <div className="text-white">
          <p>PRODUTO</p>
          <div className="flex flex-col gap-5 mt-6">
            <a href="#inicio" className="text-[#ccc] text-sm">
              Início
            </a>
            <a href="#funcionalidades" className="text-[#ccc] text-sm">
              Funcionalidades
            </a>
            <a href="#contato" className="text-[#ccc] text-sm">
              Contato
            </a>
          </div>
        </div>
        <div className="text-white">
          <p>EMPRESA</p>
          <div className="flex flex-col gap-5 mt-6">
            <a href="" className="text-[#ccc] text-sm">
              Sobre nós
            </a>
            <a href="" className="text-[#ccc] text-sm">
              Clinicas parceiras
            </a>
            <a href="" className="text-[#ccc] text-sm">
              Trabalhe conosco
            </a>
          </div>
        </div>
        <div className="text-white">
          <p>CONTATO</p>
          <div className="flex flex-col gap-5 mt-6">
            <a href="" className="text-[#ccc] text-sm">
              contato@petcare.app
            </a>
            <a href="" className="text-[#ccc] text-sm">
              (48) 999999-00000
            </a>
            <p className="text-[#ccc] text-sm">Florianópolis, SC</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10">
        <p className="text-[#ccc]">
          2026 PetCare. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-4">
          <div className="border border-[#ccc] rounded-full p-2">
            <CiInstagram color="#ccc" size={20} />
          </div>

          <div className="border border-[#ccc] rounded-full p-2">
            <CiInstagram color="#ccc" size={20} />
          </div>

          <div className="border border-[#ccc] rounded-full p-2">
            <CiInstagram color="#ccc" size={20} />
          </div>
        </div>
      </div>
    </footer>
  );
}