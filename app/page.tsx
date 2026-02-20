"use client"
import { Monitor, Download, DollarSign, Play, Smartphone, Tablet, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"

export default function DoramaPass() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [currentBuyer, setCurrentBuyer] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handlePlayVideo = () => {
    const video = document.getElementById("dorama-video") as HTMLVideoElement
    if (video) {
      video.play()
      setIsPlaying(true)
    }
  }

  const buyerNames = [
    "Maria Silva",
    "Ana Costa",
    "Bruna Santos",
    "Pedro Oliveira",
    "Carla Souza",
    "Lucas Ferreira",
    "Juliana Almeida",
    "Rafael Lima",
    "Camila Rocha",
    "Bruno Martins",
    "Fernanda Ribeiro",
    "Thiago Castro",
    "Patrícia Gomes",
    "Rodrigo Pereira",
    "Amanda Cardoso",
  ]

  useEffect(() => {
    const notificationInterval = setInterval(() => {
      const randomName = buyerNames[Math.floor(Math.random() * buyerNames.length)]
      setCurrentBuyer(randomName)
      setShowNotification(true)

      // Hide notification after 5 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 5000)
    }, 15000)

    // Show first notification after 3 seconds
    setTimeout(() => {
      const randomName = buyerNames[Math.floor(Math.random() * buyerNames.length)]
      setCurrentBuyer(randomName)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 5000)
    }, 3000)

    return () => clearInterval(notificationInterval)
  }, [])

  const testimonials = [
    {
      name: "Juliana Martins",
      avatar: "/images/image-20-284-29.jpeg",
      rating: 5,
      text: "Simplesmente perfeito! Fácil de usar, rápido e com muito conteúdo.",
    },
    {
      name: "Camila Ferreira",
      avatar: "/images/image-20-282-29.jpeg",
      rating: 5,
      text: "Melhor app que já usei pra assistir doramas .. vale a pena",
    },
    {
      name: "Bianca Souza",
      avatar: "/images/image-20-286-29.jpeg",
      rating: 5,
      text: "Maratone! meu dorama favorito sem travar nenhuma vez ,maravilhoso!",
    },
    {
      name: "João Pereira",
      avatar: "/images/image-20-283-29.jpeg",
      rating: 5,
      text: "Dei o app de presente para minha esposa, ela é viciada nessas minissséries kkkkk. Ficou faceira.",
    },
    {
      name: "Mariana Costa",
      avatar: "/images/vtaj7wp.png",
      rating: 5,
      text: "amem um app confiável e acessível pra ver meus doramas kkkk. Já recomendei pras amigas!",
    },
    {
      name: "Larissa Almeida",
      avatar: "/images/image-20-281-29.jpeg",
      rating: 5,
      text: "Achei incrível! A qualidade é ótima e tem todos os que eu procurava.",
    },
    {
      name: "Ana Beatriz Lima",
      avatar: "/images/image-20-285-29.jpeg",
      rating: 5,
      text: "Interface super intuitiva e sem aquelas propagandas e moedas chatas.!!!",
    },
    {
      name: "Beatriz Almeida",
      avatar: "/images/3p6ogo7.jpeg",
      rating: 4,
      text: "Gostei do app, mas meu celular é muito velho e muito pequeno para assistir.",
    },
    {
      name: "Lindalva Freitas",
      avatar: "/images/vtaj7wp.png",
      rating: 5,
      text: "Muito barato, achei que valeu a pena. Fui ver para assistir pelo Reelshort, tava saindo mais de R$200 por mês, ta louco! Super compensa.",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2))
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 2))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 2 < 0 ? Math.max(0, testimonials.length - 2) : prev - 2))
  }

  const dramaPostersRow1 = [
    "/drama-1.png",
    "/drama-2.webp",
    "/drama-3.webp",
    "/drama-4.webp",
    "/drama-5.webp",
    "/drama-6.webp",
    "/drama-7.webp",
    "/drama-8.webp",
    "/drama-9.jpeg",
    "/drama-10.jpeg",
  ]

  const dramaPostersRow2 = [
    "/drama-6.webp",
    "/drama-7.webp",
    "/drama-8.webp",
    "/drama-9.jpeg",
    "/drama-10.jpeg",
    "/drama-1.png",
    "/drama-2.webp",
    "/drama-3.webp",
    "/drama-4.webp",
    "/drama-5.webp",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0618] to-[#1a0b2e]">
      {/* Fixed Header */}
      <header className="border-b border-white/10 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 bg-[#1a0b2e]/95">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between md:justify-center relative">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <div className={`w-6 h-0.5 bg-pink-500 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-pink-500 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-pink-500 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>

            {/* Logo - Centered on all screens */}
            <a href="/" className="text-xl md:text-2xl font-bold absolute md:static left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none">
              <span className="text-pink-500">KDrama</span><span className="text-purple-600">Universe</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:absolute md:right-0 md:flex items-center gap-4 md:gap-6">
              <button
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="text-purple-700 hover:text-purple-900 transition-colors text-sm md:text-base font-bold"
              >
                Planos
              </button>
              <a
                href="/oferta"
                className="neon-button text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold"
              >
                Oferta Especial
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                  setMobileMenuOpen(false)
                }}
                className="text-purple-700 hover:text-purple-900 transition-colors text-sm font-bold py-2"
              >
                Planos
              </button>
              <a
                href="/oferta"
                onClick={() => setMobileMenuOpen(false)}
                className="neon-button text-white px-4 py-2 rounded-full text-sm font-bold text-center"
              >
                Oferta Especial
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight px-4">
              <span className="text-white"><span className="text-pink-500">KDrama</span> <span className="text-purple-600">Universe</span> – O Maior Universo de Doramas em um Só Lugar</span>
            </h1>

            <p className="text-center text-pink-300 text-lg md:text-xl lg:text-2xl mb-16 max-w-4xl font-semibold px-4">
              Tenha acesso imediato a uma biblioteca completa de doramas apaixonantes, com atualização constante e qualidade premium por apenas R$9,97!
            </p>

            <div className="flex justify-center mb-12 w-full">
              <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl aspect-square">
                <video
                  id="dorama-video"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-pink-500/30"
                  onPlay={() => setIsPlaying(true)}
                  onEnded={() => setIsPlaying(false)}
                  controls={isPlaying}
                  poster="/doramas-promo.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source src="/hero-video-new.mp4" type="video/mp4" />
                </video>

                {!isPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-transform rounded-3xl bg-black/20"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl neon-button">
                      <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" />
                    </div>
                  </button>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8 w-full">
              <button
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full max-w-2xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-6 px-8 text-xl md:text-2xl rounded-2xl transition-all duration-300 text-center uppercase animate-pulse-glow shadow-2xl"
              >
                GARANTIR ACESSO AGORA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - +1000 doramas */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0a0618] to-[#1a0b2e] overflow-hidden relative">
        <div className="container mx-auto max-w-6xl px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
            <span className="text-white">+1000 </span>
            <span className="text-pink-500">doramas e minisséries</span>
            <span className="text-white"> dubladas</span>
          </h2>

          <div className="mb-8 group">
            <div className="flex gap-4 animate-scroll-right group-hover:pause-animation">
              {[...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster}
                    alt={`Drama ${(index % dramaPostersRow1.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="group">
            <div className="flex gap-4 animate-scroll-left group-hover:pause-animation">
              {[...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster}
                    alt={`Drama ${(index % dramaPostersRow2.length) + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Features Section - O que voce vai receber */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1432] to-[#0f0a1f]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">O que você vai receber?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Combined Feature: Assista + Baixe */}
            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold mb-4">Todos os benefícios do Básico</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Com nosso aplicativo, você pode curtir seus doramas favoritos na TV, celular, tablet ou computador. Salve seus títulos favoritos e sempre tenha algo para assistir, mesmo sem internet. A diversão não tem limites!
              </p>
            </div>

            {/* Pagamento Único Card */}
            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Pagamento Único, Sem Mensalidades</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Pague apenas uma vez e aproveite o acesso ilimitado a todos os doramas, sem surpresas de mensalidades. Acesso vitalício para maratonar sem limites!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1432] to-[#0f0a1f]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border-2 border-pink-500/30 text-center">
            <div className="flex justify-center mb-6">
              <img src="/garantia-7-dias.png" alt="Garantia 7 Dias" className="w-32 h-32 md:w-40 md:h-40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Garantia de 7 Dias</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              Experimente o KDrama Universe sem riscos! Se não ficar satisfeito, devolvemos 100% do seu dinheiro em até 7 dias. Simples assim!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0a1f] to-[#1a1432]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">O que nossos clientes estão dizendo</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#1e1538] rounded-2xl overflow-hidden shadow-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
              <img src="/testimonial-1.jpeg" alt="Depoimento 1" className="w-full h-auto" />
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-purple-200 hover:border-purple-500 transition-all duration-300">
              <img src="/testimonial-2.jpeg" alt="Depoimento 2" className="w-full h-auto" />
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-purple-200 hover:border-purple-500 transition-all duration-300">
              <img src="/testimonial-3.jpeg" alt="Depoimento 3" className="w-full h-auto" />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="block w-full max-w-md neon-button text-white font-bold py-4 text-lg rounded-xl text-center uppercase"
            >
              GARANTIR ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-[#0a0618] to-[#1a0b2e]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Escolha o melhor plano para você</h2>
          <p className="text-center text-2xl md:text-3xl font-bold text-pink-500 mb-12">PROMOÇÃO DO MÊS</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-[#0a0a0a] rounded-3xl p-8 border-2 border-pink-500/60 transition-all duration-500 hover:border-pink-500 order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-pink-500 text-center">Plano Básico</h3>

              <div className="mb-6 text-center">
                <div className="mb-2">
                  <span className="text-2xl font-bold text-red-600 line-through">R$12,90</span>
                </div>
                <div>
                  <span className="text-5xl font-bold text-white">R$9,97</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">300 minisséries e doramas apenas</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Todos os episódios liberados</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Assista em qualquer dispositivo</span>
                </div>
              </div>

              <a
                href="https://doramapremium.mycartpanda.com/checkout/205314747:1"
                className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 text-center uppercase shadow-lg shadow-pink-500/30 animate-pulse-glow"
              >
                Quero Meu Acesso Agora
              </a>
            </div>

            {/* Plano Premium */}
            <div className="bg-[#3d1f2e] rounded-3xl p-8 border-2 border-pink-500 relative transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] order-1 md:order-2">
              <div className="absolute -top-4 -right-4">
                <div className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-pink-500/50 uppercase">
                  MELHOR OFERTA
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 mt-4 text-pink-500 text-center">Plano Premium</h3>

              <div className="mb-6 text-center">
                <div className="mb-2">
                  <span className="text-2xl font-bold text-red-600 line-through">R$24,90</span>
                </div>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-white">R$19,90</span>
                </div>
                <div className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm neon-button uppercase">
                  Economize 63%
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso a mais de 10mil minisséries e doramas</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Todos os episódios liberados dos melhores apps</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso em qualquer dispositivo</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Lançamentos diários automáticos</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Suporte VIP 24h</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso vitalício garantido</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Garantia de 7 dias</span>
                </div>
              </div>

              <a
                href="https://doramapremium.mycartpanda.com/checkout/205314748:1"
                className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 text-center uppercase shadow-lg shadow-pink-500/30 animate-pulse-glow"
              >
                Liberar Meu Acesso Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 px-4 bg-[#0a0618]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Como funciona?</h2>
          
          <div className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-3xl p-8 md:p-12 border border-purple-500/20">
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl">1️⃣</span>
                <p className="text-white text-lg pt-1">Você realiza o pagamento único de R$9,97</p>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-3xl">2️⃣</span>
                <p className="text-white text-lg pt-1">Recebe acesso imediato à plataforma</p>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-3xl">3️⃣</span>
                <p className="text-white text-lg pt-1">Pode assistir no celular, TV ou computador</p>
              </div>
            </div>

            <div className="border-t border-purple-500/30 pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✔</span>
                <p className="text-gray-300 text-lg">Pagamento 100% seguro</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">✔</span>
                <p className="text-gray-300 text-lg">Pix e cartão</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-2xl">✔</span>
                <p className="text-gray-300 text-lg">Acesso imediato</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-100 to-pink-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-900">Perguntas Frequentes</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Tem doramas dublados?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 shrink-0"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                Sim! Todos os doramas estão disponíveis com opção de áudio dublado em português, opção legendado também
                está disponível.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Como faço pra assinar?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 shrink-0"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                É só clicar no botão acima, fazer o pagamento e receber seu link de acesso diretamente no E-mail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">É mesmo vitalício?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 shrink-0"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                Sim! No Plano Premium, você paga uma vez e tem acesso pra sempre — sem mensalidades, sem renovação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Tem todos os doramas dos apps mesmo?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 shrink-0"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                Sim! Temos um acervo com +1000 minisséries e doramas dos principais aplicativos, e todos os dias
                adicionamos lançamentos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Em quanto tempo recebo o acesso?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                O acesso e o link de download do APP são enviados automaticamente após o pagamento para o e-mail
                cadastrado na hora da compra.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Posso assistir na TV?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                Sim! Funciona em Smart TVs, Chromecast, Fire Stick, e até espelhando pelo celular.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-2xl border border-purple-500/20 overflow-hidden"
            >
              <AccordionTrigger className="text-xl font-bold px-6 py-5 hover:no-underline hover:bg-white/5 transition-colors w-full flex justify-between items-center [&[data-state=open]>svg]:rotate-180">
                <span className="text-left">Preciso pagar mensalidade depois?</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                  <path d="M12 3v6" />
                </svg>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                Não! É pagamento único. Sem taxas escondidas ou cobranças futuras.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Button Section */}
      <section className="py-16 px-4 bg-[#0a0618]">
        <div className="container mx-auto max-w-md">
          <button
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            className="block w-full bg-[#4a0e78] hover:bg-[#5a1a8a] text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 text-center uppercase animate-pulse-glow"
          >
            GARANTIR ACESSO
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-[#0d0820] border-t border-purple-500/20">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="text-center">
              <h2 className="text-3xl font-bold">
                <span className="text-sm text-gray-400 block mb-1">Passaport</span>
                <span className="text-white font-serif italic">Dorama</span>
              </h2>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-center">© 2025 DoramaPlay Online. Todos os direitos reservados.</p>

            {/* Links */}
            <div className="flex gap-8 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
