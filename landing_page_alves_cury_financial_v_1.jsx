import React, { useState } from "react";

// ✅ Tailwind CSS required in the host app. No external UI libs used for portability.
// Drop this component into a Next.js page (e.g., app/page.tsx) or any React app.

export default function LandingAlvesCury() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    estado: "",
    idade: "",
    objetivo: "Não sei ainda",
  });

  const estados = [
    "AL","AK","AZ","AR","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV"
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function toWhatsAppNumber(n) {
    // Keep digits only
    return (n || "").replace(/\D/g, "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // ⚠️ WhatsApp da Alves Cury Financial conforme site atual: +1 (561) 823-1966
    const wppNumber = "15618231966"; // edite aqui se precisar

    const msg = `Oi! Sou ${form.nome}.\nQuero uma cotação de seguro com benefício em vida.\nWhatsApp: ${form.whatsapp}\nEstado: ${form.estado}\nIdade: ${form.idade}\nObjetivo: ${form.objetivo}`;

    const url = `https://wa.me/${wppNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center text-white font-bold">AC</div>
            <span className="font-semibold">Alves Cury Financial</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:text-blue-600">Benefícios</a>
            <a href="#como-funciona" className="hover:text-blue-600">Como funciona</a>
            <a href="#depoimentos" className="hover:text-blue-600">Depoimentos</a>
            <a href="#faq" className="hover:text-blue-600">FAQ</a>
          </nav>
          <a
            href="#lead"
            className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-blue-700"
          >
            Quero minha cotação
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 mb-4">
              Atendimento em português nos EUA
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Seguro de vida com <span className="text-blue-600">benefício em vida</span> nos EUA
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Proteja seu presente e planeje seu futuro com estratégias inteligentes de proteção de renda e acumulação.
            </p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              {[
                "Cobertura para doenças críticas, crônicas e terminais",
                "Opções Term e IUL com foco em proteção + crescimento",
                "Atendimento consultivo 100% personalizado",
                "Cotação gratuita e sem compromisso",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a href="#lead" className="rounded-xl bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">
                Solicitar cotação
              </a>
              <a
                href="https://wa.me/15618231966"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-200 px-5 py-3 font-medium hover:bg-blue-50"
              >
                Falar no WhatsApp
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              *Sujeito a análise e aprovação da seguradora. Valores e coberturas variam conforme perfil e estado de residência.
            </p>
          </div>

          {/* Lead Form */}
          <div id="lead" className="bg-white rounded-2xl shadow-xl p-6 border">
            <h2 className="text-xl font-bold">Receba sua cotação gratuita</h2>
            <p className="text-sm text-gray-600 mt-1">Preencha e enviaremos as melhores opções para o seu perfil.</p>
            <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium">Nome completo</label>
                <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">WhatsApp</label>
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} required placeholder="(DDD) número" className="mt-1 w-full rounded-xl border px-3 py-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Estado</label>
                  <select name="estado" value={form.estado} onChange={handleChange} required className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
                    <option value="">Selecione</option>
                    {estados.map((uf) => (
                      <option key={uf} value={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Idade</label>
                  <input name="idade" value={form.idade} onChange={handleChange} required type="number" min={0} className="mt-1 w-full rounded-xl border px-3 py-2" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Objetivo principal</label>
                <select name="objetivo" value={form.objetivo} onChange={handleChange} className="mt-1 w-full rounded-xl border px-3 py-2 bg-white">
                  <option>Proteção de renda</option>
                  <option>Benefício em vida (doenças)</option>
                  <option>Planejamento de aposentadoria</option>
                  <option>Acumulação com IUL</option>
                  <option>Não sei ainda</option>
                </select>
              </div>
              <button type="submit" className="mt-1 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700">
                Quero minha cotação
              </button>
              <p className="text-[11px] text-gray-500">Ao enviar, você concorda em ser contatado(a) pela nossa equipe. Seus dados não serão compartilhados.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust / Badges */}
      <section className="border-y bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            "Consultoria personalizada",
            "Seguradoras A‑Rated",
            "Atendimento humanizado",
            "Processo 100% online",
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border p-4">
              <div className="mx-auto mb-2 h-8 w-8 rounded-lg bg-blue-100 grid place-items-center">
                <span>★</span>
              </div>
              <p className="font-medium">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Por que escolher a Alves Cury Financial</h2>
          <p className="mt-2 text-gray-700">Proteção hoje, tranquilidade amanhã — com estratégias alinhadas ao seu momento de vida.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Benefício em Vida",
              d: "Acesso antecipado à cobertura em casos de doenças críticas, crônicas ou terminais, conforme elegibilidade da apólice.",
            },
            {
              t: "Proteção de Renda",
              d: "Segurança para sua família e patrimônio com coberturas que cabem no bolso.",
            },
            {
              t: "Acumulação Inteligente",
              d: "Estratégias com IUL para crescimento de longo prazo com proteção ao principal (de acordo com a apólice).",
            },
            {
              t: "Atendimento Consultivo",
              d: "Entendimento do seu cenário para apresentar as melhores opções — sem letrinhas miúdas.",
            },
            {
              t: "Processo Rápido",
              d: "Cotação em minutos e emissão simplificada quando aplicável.",
            },
            {
              t: "Suporte Contínuo",
              d: "Acompanhamento após a contratação para ajustes quando necessário.",
            },
          ].map(({ t, d }, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-gray-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-gradient-to-b from-white to-blue-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Como funciona</h2>
            <p className="mt-2 text-gray-700">Transparente e sem complicação — do primeiro contato à sua apólice.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                t: "Análise rápida",
                d: "Entendemos seu perfil, necessidades e orçamento.",
              },
              {
                n: "2",
                t: "Cotações personalizadas",
                d: "Comparamos opções com benefício em vida, Term e IUL.",
              },
              { n: "3", t: "Aplicação e aprovação", d: "Orientamos todo o processo até a emissão." },
            ].map(({ n, t, d }) => (
              <div key={n} className="rounded-2xl border bg-white p-6 flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-blue-600 text-white grid place-items-center font-bold">{n}</div>
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="text-sm text-gray-700 mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplos de preço (estimativas) */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Quanto custa?</h2>
          <p className="mt-2 text-gray-700">Valores estimados para perfil padrão, não fumante. A cotação oficial depende da análise da seguradora.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { v: "$250.000", p: "$35,20/mês" },
            { v: "$500.000", p: "$63,80/mês" },
            { v: "$800.000", p: "$98,12/mês" },
          ].map(({ v, p }, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Cobertura</p>
              <h3 className="text-2xl font-extrabold">{v}</h3>
              <p className="mt-1 text-lg font-semibold">{p}</p>
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                <li>• Benefício em vida conforme condição e apólice</li>
                <li>• Emissão simplificada quando elegível</li>
                <li>• Ajuste de valor conforme necessidade</li>
              </ul>
              <a href="#lead" className="mt-5 inline-block rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Quero cotar</a>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-gray-500">*Exemplos ilustrativos. Não constituem oferta. Benefícios variam por apólice, idade, estado e análise médica/financeira.</p>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="bg-white border-y">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">O que nossos clientes dizem</h2>
            <p className="mt-2 text-gray-700">Atendimento humano, consultivo e transparente do começo ao fim.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Maria S.",
                d: "A equipe transformou minha visão sobre proteção e aposentadoria. Tudo muito claro e didático!",
              },
              { n: "João S.", d: "Excelente atendimento e estratégia sob medida para minha família." },
              { n: "Ana C.", d: "Profissionais sérios e atenciosos. Recomendo de olhos fechados." },
            ].map(({ n, d }, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm">
                <p className="text-gray-700">“{d}”</p>
                <p className="mt-3 text-sm font-semibold">{n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Perguntas frequentes</h2>
          <p className="mt-2 text-gray-700">Tire suas dúvidas mais comuns antes de cotar.</p>
        </div>
        <div className="mt-8 grid gap-4">
          {[
            {
              q: "O que é benefício em vida?",
              a: "É a possibilidade de acessar parte da cobertura em vida em casos de doenças elegíveis (críticas, crônicas ou terminais), conforme a apólice.",
            },
            {
              q: "Term x IUL: qual a diferença?",
              a: "Term foca em proteção por período determinado e custo acessível. IUL combina proteção com potencial de acumulação de longo prazo.",
            },
            {
              q: "Existe carência?",
              a: "Após a primeira contribuição e aprovação da seguradora, a cobertura é efetivada conforme as condições da apólice.",
            },
            {
              q: "Atendem em quais estados?",
              a: "Atendemos a maior parte dos EUA. Informe seu estado no formulário para verificarmos disponibilidade.",
            },
          ].map(({ q, a }, i) => (
            <details key={i} className="rounded-2xl border bg-white p-5 open:shadow-sm">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Pronto(a) para proteger quem você ama?</h3>
          <p className="mt-2 text-blue-100">Receba sua cotação gratuita agora mesmo — leva menos de 1 minuto.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#lead" className="rounded-xl bg-white text-blue-700 px-5 py-3 font-semibold hover:bg-blue-50">Quero cotar</a>
            <a href="https://wa.me/15618231966" target="_blank" rel="noreferrer" className="rounded-xl border border-white/40 px-5 py-3 font-semibold hover:bg-white/5">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 grid place-items-center text-white font-bold">AC</div>
              <span className="font-semibold">Alves Cury Financial</span>
            </div>
            <p className="mt-3 text-gray-700">Especialistas em soluções de proteção e acumulação financeira nos EUA.</p>
          </div>
          <div>
            <p className="font-semibold">Contato</p>
            <ul className="mt-2 text-gray-700">
              <li>Email: <a className="underline" href="mailto:contato@alvescuryfinancial.com">contato@alvescuryfinancial.com</a></li>
              <li>Telefone/WhatsApp: <a className="underline" href="tel:+15618231966">+1 (561) 823-1966</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Links úteis</p>
            <ul className="mt-2 text-gray-700">
              <li><a href="#beneficios" className="hover:underline">Benefícios</a></li>
              <li><a href="#como-funciona" className="hover:underline">Como funciona</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">
          © {new Date().getFullYear()} Alves Cury Financial. Todos os direitos reservados. *Conteúdo informativo; verifique sua elegibilidade com um agente licenciado.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/15618231966"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 h-14 w-14 rounded-full bg-green-500 text-white grid place-items-center shadow-2xl hover:scale-105 transition"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M.057 24l1.687-6.163A11.867 11.867 0 0111.99 0C18.627 0 24 5.373 24 12.01c0 6.628-5.373 12-12.01 12A11.95 11.95 0 016.13 22.338L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.593 5.448.003 9.886-4.429 9.889-9.877.003-5.462-4.415-9.89-9.881-9.893-5.452-.003-9.89 4.43-9.893 9.881a9.82 9.82 0 001.528 5.174l-.999 3.648 3.964-.526zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.58-.487-.502-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}
