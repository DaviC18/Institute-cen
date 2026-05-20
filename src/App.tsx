import { useEffect, useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function copyPix() {
    const key = "46.661.818/0001-56";
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  function handleFormSubmit(e: any) {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value || "Sem nome";
    const phone = form.phone.value || "";
    const email = form.email.value || "";
    const msg = form.message.value || "";

    const text = encodeURIComponent(
      `Olá! Me chamo ${name}.\n📱 ${phone}\n✉️ ${email}\n\n${msg}`,
    );

    window.open(`https://wa.me/552488112232?text=${text}`, "_blank");
  }

  return (
    <div className="bg-[#FDFAF4] text-[#2A1A0A] font-sans overflow-x-hidden">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-18 flex items-center justify-between px-[5%] backdrop-blur-xl border-b border-[#D4780A20] bg-[#FDFAF4E6] ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#F5A623] to-[#7C430A] flex items-center justify-center text-white">
            ⛪
          </div>
          <span className="font-serif text-lg">Instituto Cristo em Nós</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-[#5C3A1E]">
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#programas">Programas</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#localizacao">Localização</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <a
          href="#doacao"
          className="hidden md:block bg-[#D4780A] text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          Doar
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-18 left-0 right-0 bg-[#FDFAF4] z-40 flex flex-col gap-6 p-6 md:hidden">
          {[
            "sobre",
            "programas",
            "galeria",
            "localizacao",
            "doacao",
            "contato",
          ].map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {id}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-[#2A1A0A] px-[5%] relative overflow-hidden pt-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#D4780A30,transparent)]" />

        <div className="relative max-w-3xl text-white">
          <span className="text-xs uppercase tracking-widest bg-[#F5A62320] px-4 py-1 rounded-full">
            ONG — Barra Mansa
          </span>

          <h1 className="text-4xl md:text-6xl font-serif mt-6">
            Combatendo a Fome, <br />
            <span className="text-[#F5A623] italic">Transformando Vidas</span>
          </h1>

          <p className="mt-6 text-white/60 max-w-xl">
            Educação, cultura e dignidade para quem mais precisa.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#doacao"
              className="bg-[#D4780A] px-6 py-3 rounded-full font-bold"
            >
              Doar agora
            </a>
            <a
              href="#sobre"
              className="border border-white/30 px-6 py-3 rounded-full"
            >
              Conhecer missão
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT (exemplo resumido por tamanho — posso expandir depois se quiser) */}
      <section id="sobre" className="py-24 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#F5A62320] rounded-2xl h-100" />
          <div>
            <span className="text-xs uppercase bg-[#F5A62320] px-3 py-1 rounded-full">
              Quem somos
            </span>

            <h2 className="text-3xl font-serif mt-4">
              Uma causa que nasce do{" "}
              <span className="text-[#D4780A] italic">amor</span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              O Instituto atua em Barra Mansa combatendo fome e promovendo
              transformação social.
            </p>
          </div>
        </div>
      </section>

      {/* DONATION */}
      <section id="doacao" className="py-24 px-[5%] bg-[#D4780A]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-serif text-black">
              Sua doação alimenta esperança
            </h2>
            <p className="mt-4 text-black/70">
              Cada contribuição transforma vidas reais.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl">
            <p className="text-xs uppercase">PIX</p>
            <div
              onClick={copyPix}
              className="mt-3 p-3 bg-[#F7F0E6] rounded-lg cursor-pointer"
            >
              46.661.818/0001-56
            </div>

            <button
              onClick={copyPix}
              className={`w-full mt-4 py-3 rounded-full font-bold ${
                copied ? "bg-green-600 text-white" : "bg-[#D4780A] text-white"
              }`}
            >
              {copied ? "Copiado!" : "Copiar PIX"}
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-24 px-[5%] bg-[#F7F0E6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-serif">Fale conosco</h2>
            <p className="mt-4 text-gray-600">Vamos construir algo juntos.</p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white p-6 rounded-2xl space-y-4"
          >
            <input
              name="name"
              placeholder="Nome"
              className="w-full p-3 bg-[#F7F0E6] rounded-lg"
            />
            <input
              name="phone"
              placeholder="Telefone"
              className="w-full p-3 bg-[#F7F0E6] rounded-lg"
            />
            <input
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-[#F7F0E6] rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="w-full p-3 bg-[#F7F0E6] rounded-lg"
            />

            <button className="w-full bg-[#D4780A] text-white py-3 rounded-full font-bold">
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2A1A0A] text-white px-[5%] py-12 text-sm">
        © 2025 Instituto Cristo em Nós
      </footer>
    </div>
  );
}
