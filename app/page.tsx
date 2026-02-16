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
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
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
            <a href="/" className="text-xl md:text-2xl font-bold text-pink-500 absolute md:static left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none">
              DoramaPlay
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:absolute md:right-0 md:flex items-center gap-4 md:gap-6">
              <button
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="text-white hover:text-pink-400 transition-colors text-sm md:text-base font-medium"
              >
                Planos
              </button>
              <a
                href="/oferta"
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30"
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
                className="text-white hover:text-pink-400 transition-colors text-sm font-medium py-2"
              >
                Planos
              </button>
              <a
                href="/oferta"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:from-pink-600 hover:to-pink-700 transition-all shadow-lg shadow-pink-500/30 text-center"
              >
                Oferta Especial
              </a>
            </div>
          )}
        </div>
      </header>

      <div
        className={`fixed bottom-6 left-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-500 ${
          showNotification ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-sm">{currentBuyer}</p>
            <p className="text-xs opacity-90">acabou de comprar o DoramaPlay Online</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="text-white">Acesso Vitálicio AGORA!</span>
            </h1>

            <p className="text-center text-pink-300 text-xl md:text-2xl lg:text-3xl mb-16 max-w-4xl font-semibold">
              Maratone Doramas Sem Limites, Sem Anúncios e Sem Mensalidades!
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
                >
                  <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                {!isPlaying && (
                  <button
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-transform rounded-3xl bg-black/20"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-pink-500/50">
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
      <section className="py-20 px-4 bg-[#0f0a1f] overflow-hidden relative">
        <div className="container mx-auto max-w-6xl px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
            <span className="text-white">+1000 </span>
            <span className="text-pink-400">doramas e minisséries</span>
            <span className="text-white"> dubladas</span>
          </h2>

          <div className="mb-8 group">
            <div className="flex gap-4 animate-scroll-right group-hover:pause-animation">
              {[...dramaPostersRow1, ...dramaPostersRow1, ...dramaPostersRow1].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster || "/placeholder.svg"}
                    alt={`Drama ${(index % dramaPostersRow1.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="group">
            <div className="flex gap-4 animate-scroll-left group-hover:pause-animation">
              {[...dramaPostersRow2, ...dramaPostersRow2, ...dramaPostersRow2].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster || "/placeholder.svg"}
                    alt={`Drama ${(index % dramaPostersRow2.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight">
            <span className="text-white">Todos os </span>
            <span className="text-pink-400">doramas</span>
            <span className="text-white"> dessas plataformas em um só Aplicativo.</span>
          </h2>

          <div className="flex justify-center items-center gap-6 mt-12 flex-wrap">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src="/images/image-20-283-29.png" alt="Kocowa+" className="w-full h-full object-cover" />
            </div>

            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src="/images/image-20-282-29.png" alt="Viki Rakuten" className="w-full h-full object-cover" />
            </div>

            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src="/images/image-20-281-29.png" alt="iQIYI" className="w-full h-full object-cover" />
            </div>

            <div className="w-20 h-20 rounded-lg overflow-hidden bg-black flex items-center justify-center">
              <img src="/images/image.png" alt="Netflix" className="w-full h-full object-contain" />
            </div>

            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img src="/images/image.jpeg" alt="Prime Video" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="block w-full max-w-md bg-[#4a0e78] hover:bg-[#5a1a8a] text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 text-center uppercase animate-pulse-glow"
            >
              GARANTIR ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - O que voce vai receber */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0a1f] to-[#1a1432]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">O que você vai receber?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Combined Feature: Assista + Baixe */}
            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="mb-8">
                <img src="/streaming-apps.jpeg" alt="Apps de Streaming" className="w-full h-auto rounded-xl shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tudo em um só lugar</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Com nosso aplicativo, você pode curtir seus doramas favoritos na TV, celular, tablet ou computador. Salve seus títulos favoritos e sempre tenha algo para assistir, mesmo sem internet. A diversão não tem limites!
              </p>
            </div>

            {/* Pagamento Único Card */}
            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col justify-center">
              <div className="mb-8">
                <img src="/phone-dublado-legendado.png" alt="Phone Mockup" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pagamento Único, Sem Mensalidades</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Pague apenas uma vez e aproveite o acesso ilimitado a todos os doramas, sem surpresas de mensalidades. Acesso vitalício para maratonar sem limites!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1432] to-[#0f0a1f] overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">O que nossas clientes estão dizendo</h2>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-testimonial-scroll">
              {[
                "/depoimento-1.png",
                "/depoimento-2.png",
                "/depoimento-3.png",
                "/depoimento-4.png",
                "/depoimento-5.png",
                "/depoimento-6.png",
                "/depoimento-7.png",
                "/depoimento-8.png",
                "/depoimento-9.png",
                "/depoimento-10.png",
                "/depoimento-1.png",
                "/depoimento-2.png",
                "/depoimento-3.png",
                "/depoimento-4.png",
                "/depoimento-5.png",
                "/depoimento-6.png",
                "/depoimento-7.png",
                "/depoimento-8.png",
                "/depoimento-9.png",
                "/depoimento-10.png",
              ].map((src, index) => (
                <div key={index} className="flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={src}
                    alt={`Depoimento cliente ${(index % 10) + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="block w-full max-w-md bg-[#4a0e78] hover:bg-[#5a1a8a] text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 text-center uppercase animate-pulse-glow"
            >
              GARANTIR ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Escolha o melhor plano para você</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-3xl p-8 border-2 border-pink-500/60 transition-all duration-500 hover:border-pink-500 order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-6 text-pink-500 text-center">Plano Básico</h3>

              <div className="mb-6 text-center">
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">R$12,90</span>
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
                  <span className="text-white">Acesso completo ao catálogo</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Qualidade HD e 4K</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Sem anúncios</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">80% dos doramas dublados</span>
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

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso durante o período ativo</span>
                </div>
              </div>

              <a
                href="https://doramapremium.mycartpanda.com/checkout/205314747:1"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] text-center uppercase"
              >
                ASSINAR AGORA
              </a>
            </div>

            <div className="bg-[#3d1f2e] rounded-3xl p-8 border-2 border-pink-500 relative transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] order-1 md:order-2">
              <div className="absolute -top-4 -right-4">
                <div className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-pink-500/50 uppercase">
                  MELHOR OFERTA
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 mt-4 text-pink-500 text-center">Plano Premium</h3>

              <div className="mb-6 flex justify-center">
                <img 
                  src="/doramas-promo.jpg" 
                  alt="Doramas e Mini Séries" 
                  className="w-64 h-64 object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="mb-6 text-center">
                <div className="mb-3">
                  <span className="text-5xl font-bold text-white">R$ 24,90</span>
                </div>
                <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-pink-500/40 uppercase">
                  Economize 83%
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
                  <span className="text-white">Todos os benefícios do Básico</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso prioritário a novidades</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Suporte premium 24/7</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso imediato via WhatsApp e e-mail</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Download para assistir offline</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Até 4 telas simultâneas</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Acesso vitalício</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-pink-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white">Pagamento único</span>
                </div>
              </div>

              <a
                href="https://doramapremium.mycartpanda.com/checkout/205314748:1"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] text-center uppercase"
              >
                ASSINAR PLANO VITALÍCIO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-[#0a0618]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-[#3d2463] to-[#2d1a4a] rounded-3xl p-12 border border-purple-500/20">
            {/* Garantia de 30 Dias */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-500/20 p-3 rounded-xl">
                  <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Garantia de 30 Dias</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Se você não ficar 100% satisfaita com o acesso, devolvemos seu dinheiro integralmente em até 30 dias
                após a compra.
              </p>
            </div>

            {/* Sem perguntas */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-500/20 p-3 rounded-xl">
                  <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold">Sem perguntas</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Sua satisfação ou seu dinheiro de volta. Simples assim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#0a0618]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Perguntas Frequentes</h2>

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
