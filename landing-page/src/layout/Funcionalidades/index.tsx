import { CiCalendar } from "react-icons/ci";
import { LuSyringe } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Cards from "../../components/Cards";


export default function Funcionalidade() {
  return (
    <>
      <section className="px-20" id="funcionalidades">
        <div className="flex flex-col items-center justify-center">
          <div className=" mt-5 rounded-full flex gap-2 bg-[#DCEFE4] p-2">
            <p>Funcionalidades</p>
          </div>
          <div className="justify-center text-center mt-5 items-center  ">
            <h2 className=" text-4xl font-semibold text-[#153229]">Tudo que o seu pet precisa, num só lugar</h2>
            <p className="text-balance max-w-full">
              Da vacina ao passeio, o PetCare acompanha cada etapa do
              cuidado-pra você nunca perder de vista.</p>
          </div>
        </div>

        <div className=" gap-7 grid grid-cols-3 mt-14  align-items-center justify-items-center">
          <Cards
            title="Agendamento de Consulta"
            description="Marque horários com clínicas parceiras em
                        poucos toques e receba lembretes automáticos"
            icon={<CiCalendar size={32} color="#52D15C" />}
            background="bg-[#DCEFE4]"
          />

          <Cards
            title="Carteira de vacinação"
            description="Histórico completo de vacinas e vermífugos,
                        com alerta antes de cada dose vencer."
            icon={<LuSyringe size={28} color="#F25757" />}
            background="bg-[#F0AAAA]"
          />

          <Cards
            title="Histórico de Saúde"
            description="Peso, exames e diagnósticos organizados
                        por pet, prontos pra mostrar ao veterinário."
            icon={<CiHeart size={32} color="#A3A036" />}
            background="bg-[#EDE29D]"
          />

          <Cards
            title="Chat de veterinários"
            description="Tire dúvidas rápidas por mensagem, sem
                          precisar sair de casa nem esperar em fila."
            icon={<CiChat1 size={32} color="#52D15C" />}
            background="bg-[#DCEFE4]"
          />

          <Cards
            title="Lembretes inteligentes"
            description="Notificações de banho, remédio e retorno,
                        ajustadas à rotina de cada pet."
            icon={<CiClock2 size={32} color="#F25757" />}
            background="bg-[#F0AAAA]"
          />

          <Cards
            title="Loja de produtos"
            description="Ração, medicamentos e acessórios
                        recomendados, com entrega direto na sua casa."
            icon={<MdOutlineProductionQuantityLimits size={32} color="#A3A036" />}
            background="bg-[#EDE29D]"
          />
        </div>

      </section>
    </>
  );
}
