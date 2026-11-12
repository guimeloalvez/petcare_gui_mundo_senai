import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiBell,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiHeart,
  FiHome,
  FiLogOut,
  FiMenu,
  FiPlus,
  FiSearch,
  FiSettings,
  FiShoppingBag,
  FiSun,
} from "react-icons/fi";
import { MdOutlinePets } from "react-icons/md";

// Importe o seu serviço de storage se possuir um (ex: authStorage.clear())
// import { authStorage } from "../../auth/storage/auth.storage"; 

const pets = [
  { name: "Mel", breed: "Golden Retriever", age: "3 anos", emoji: "🐕", color: "bg-[#FFF0E8]", tag: "Tudo em dia" },
  { name: "Nina", breed: "Gatinha • Siamês", age: "1 ano", emoji: "🐈", color: "bg-[#EAF4EC]", tag: "Atenção à vacina" },
];

const appointments = [
  { time: "09:30", title: "Passeio da Mel", detail: "Parque • 30 minutos", icon: "🐾", color: "bg-[#FFF0E8]" },
  { time: "14:00", title: "Consulta da Nina", detail: "Clínica veterinária", icon: "🩺", color: "bg-[#EAF4EC]" },
  { time: "18:00", title: "Hora da alimentação", detail: "Mel e Nina", icon: "🥣", color: "bg-[#F2EDFF]" },
];

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Limpe os dados do usuário do localStorage / sessionStorage
    localStorage.removeItem("token"); 
    // ou authStorage.clear(); se estiver usando sua classe customizada

    // Redirecione para a tela de login
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-[#FBF9F4] text-[#153229]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside className={`${menuOpen ? "flex" : "hidden"} fixed inset-y-0 left-0 z-30 w-64 flex-col border-r border-[#E9E6DE] bg-white px-6 py-8 md:relative md:flex`}>
          <a href="/" className="mb-12 flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#153229] text-white"><MdOutlinePets size={24} /></span>
            <span className="font-display text-2xl font-extrabold tracking-tight"><span>pet</span><span className="text-[#FF6B4A]">care</span></span>
          </a>

          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#A3A69E]">Menu principal</p>
          <nav className="flex flex-col gap-2">
            <a href="/" className="flex items-center gap-3 rounded-2xl bg-[#EAF4EC] px-4 py-3.5 font-semibold text-[#2E795A]"><FiHome size={19} /> Início</a>
            <a href="#meus-pets" className="flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium text-[#727970] transition hover:bg-[#F7F6F1]"><MdOutlinePets size={20} /> Meus pets</a>
            <a href="#agenda" className="flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium text-[#727970] transition hover:bg-[#F7F6F1]"><FiCalendar size={19} /> Agenda</a>
            <a href="#cuidados" className="flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium text-[#727970] transition hover:bg-[#F7F6F1]"><FiHeart size={19} /> Cuidados</a>
            <a href="#loja" className="flex items-center gap-3 rounded-2xl px-4 py-3.5 font-medium text-[#727970] transition hover:bg-[#F7F6F1]"><FiShoppingBag size={19} /> Pet shop</a>
          </nav>

          <div className="mt-auto rounded-3xl bg-[#FFF0E8] p-5">
            <div className="mb-3 text-3xl">🐶</div>
            <p className="font-display text-lg font-bold">Um cuidado a mais?</p>
            <p className="mt-1 text-xs leading-5 text-[#8D6E60]">Mantenha a rotina dos seus pets sempre organizada.</p>
            <a href="#agenda" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#D95C3F]">Ver agenda <FiChevronRight /></a>
          </div>
          <a href="#configuracoes" className="mt-6 flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#727970]"><FiSettings size={18} /> Configurações</a>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-6 sm:px-8 lg:px-10 lg:py-9">
          <header className="mb-9 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl border border-[#E9E6DE] bg-white p-2.5 md:hidden" aria-label="Abrir menu"><FiMenu /></button>
              <div>
                <p className="text-sm font-medium text-[#92968E]">Quinta-feira, 12 de novembro</p>
                <h1 className="font-display text-2xl font-extrabold sm:text-3xl">Olá, tutor! <span>👋</span></h1>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="hidden rounded-full border border-[#E9E6DE] bg-white p-3 text-[#727970] sm:block" aria-label="Buscar"><FiSearch size={19} /></button>
              <button className="relative rounded-full border border-[#E9E6DE] bg-white p-3 text-[#727970]" aria-label="Notificações"><FiBell size={19} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#FF6B4A]" /></button>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E6D9C8] text-xl">🧑🏻</div>
            </div>
          </header>

          <section className="relative mb-8 overflow-hidden rounded-[30px] bg-[#153229] px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#D5E8D9]"><FiSun /> Um dia cheio de carinho</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">O bem-estar deles<br /> começa com você.</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#D0DCD4]">Confira os cuidados de hoje e deixe a rotina dos seus companheiros mais leve.</p>
              <a href="#agenda" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B4A] px-5 py-3 text-sm font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-[#F45E3E]">Ver minha agenda <FiChevronRight /></a>
            </div>
            <div className="pointer-events-none absolute -right-5 -top-12 text-[180px] opacity-20 sm:right-12 sm:text-[220px]">🐾</div>
            <div className="pointer-events-none absolute bottom-[-38px] right-16 text-7xl sm:bottom-[-45px] sm:right-32 sm:text-8xl">🐕</div>
          </section>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-[#EEEAE2] bg-white p-5">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#8A9087]">Pets cadastrados</span><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#EAF4EC] text-[#3F9271]"><MdOutlinePets size={21} /></span></div>
              <p className="mt-3 font-display text-3xl font-extrabold">02</p><p className="mt-1 text-xs text-[#9A9E96]">Seus companheiros 🐾</p>
            </article>
            <article className="rounded-3xl border border-[#EEEAE2] bg-white p-5">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#8A9087]">Cuidados de hoje</span><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FFF0E8] text-[#FF6B4A]"><FiHeart size={20} /></span></div>
              <p className="mt-3 font-display text-3xl font-extrabold">03</p><p className="mt-1 text-xs text-[#9A9E96]">Não deixe passar nenhum</p>
            </article>
            <article className="rounded-3xl border border-[#EEEAE2] bg-white p-5">
              <div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#8A9087]">Próximo compromisso</span><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#F2EDFF] text-[#9274D8]"><FiClock size={20} /></span></div>
              <p className="mt-3 font-display text-3xl font-extrabold">09:30</p><p className="mt-1 text-xs text-[#9A9E96]">Passeio da Mel</p>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1.15fr_0.85fr]">
            <section id="meus-pets">
              <div className="mb-4 flex items-center justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#A3A69E]">Seus melhores amigos</p><h2 className="mt-1 font-display text-2xl font-extrabold">Meus pets</h2></div>
                <button className="inline-flex items-center gap-1.5 rounded-full border border-[#E4E5DC] bg-white px-4 py-2.5 text-sm font-bold text-[#3F9271] transition hover:bg-[#EAF4EC]"><FiPlus /> Adicionar</button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pets.map((pet) => (
                  <article key={pet.name} className="rounded-3xl border border-[#EEEAE2] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(21,50,41,0.06)]">
                    <div className={`mb-4 grid h-24 place-items-center rounded-2xl ${pet.color} text-6xl`}>{pet.emoji}</div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-extrabold">{pet.name}</h3>
                        <p className="mt-1 text-xs text-[#92968E]">{pet.breed} • {pet.age}</p>
                      </div>
                      <FiChevronRight className="mt-1 text-[#A3A69E]" />
                    </div>
                    <span className={`mt-4 inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${pet.name === "Mel" ? "bg-[#EAF4EC] text-[#3F9271]" : "bg-[#FFF0E8] text-[#D95C3F]"}`}>{pet.name === "Mel" ? "✓ " : "• "}{pet.tag}</span>
                  </article>
                ))}
              </div>
            </section>

            <section id="agenda">
              <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#A3A69E]">Organize o dia</p><h2 className="mt-1 font-display text-2xl font-extrabold">Agenda de hoje</h2></div><a href="#agenda" className="text-sm font-bold text-[#3F9271]">Ver tudo</a></div>
              <div className="rounded-3xl border border-[#EEEAE2] bg-white p-5">
                {appointments.map((item, index) => (
                  <div key={item.time} className={`flex gap-4 py-4 ${index !== appointments.length - 1 ? "border-b border-[#F0EEE8]" : ""}`}>
                    <div className="w-12 shrink-0 pt-1 text-xs font-extrabold text-[#8A9087]">{item.time}</div>
                    <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${item.color} text-xl`}>{item.icon}</div>
                    <div className="min-w-0 flex-1"><h3 className="text-sm font-bold">{item.title}</h3><p className="mt-1 text-xs text-[#92968E]">{item.detail}</p></div>
                    <FiChevronRight className="mt-2 shrink-0 text-[#B3B7AE]" />
                  </div>
                ))}
                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-[#D8DED5] py-3 text-sm font-bold text-[#3F9271] transition hover:bg-[#F5FAF5]"><FiPlus /> Adicionar compromisso</button>
              </div>
            </section>
          </div>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#E9E6DE] pt-5 text-xs text-[#A3A69E]">
            <span>Feito com <span className="text-[#FF6B4A]">♥</span> para quem ama pets.</span>
            <span>PetCare • Seu cuidado, nosso carinho</span>
            {/* O botão de Logout agora invoca a função handleLogout em vez de usar href diretamente */}
            <button onClick={handleLogout} className="inline-flex items-center gap-1.5 hover:text-[#153229] font-bold">
              <FiLogOut /> Sair
            </button>
          </footer>
        </section>
      </div>
    </main>
  );
}