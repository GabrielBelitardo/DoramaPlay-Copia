"use client"
import { Monitor, Download, DollarSign, Play, Smartphone, Tablet, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"

export default function DoramaPass() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [currentBuyer, setCurrentBuyer] = useState("")

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
    "/images/image-20-2828-29.png",
    "/images/image-13.png",
    "/images/image-5.png",
    "/images/image-14.png",
    "/images/image-4.png",
    "/images/image-7.png",
    "/images/image-15.png",
    "/images/image-8.png",
    "/images/image-6.png",
    "/images/image-20-2827-29.png",
    "/images/image-20-2816-29.png",
    "/images/image-20-2815-29.png",
    "/images/image-20-2826-29.png",
    "/images/image-20-2823-29.png",
    "/images/image-20-2824-29.png",
    "/images/image-20-2825-29.png",
    "/images/image-20-2822-29.png",
    "/images/image-20-2817-29.png",
  ]

  const dramaPostersRow2 = [
    "/images/image-20-2817-29.png",
    "/images/image-6.png",
    "/images/image-8.png",
    "/images/image-15.png",
    "/images/image-7.png",
    "/images/image-4.png",
    "/images/image-14.png",
    "/images/image-5.png",
    "/images/image-13.png",
    "/images/image-20-2822-29.png",
    "/images/image-20-2825-29.png",
    "/images/image-20-2824-29.png",
    "/images/image-20-2823-29.png",
    "/images/image-20-2826-29.png",
    "/images/image-20-2815-29.png",
    "/images/image-20-2816-29.png",
    "/images/image-20-2827-29.png",
    "/images/image-20-2828-29.png",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
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
            <p className="text-xs opacity-90">acabou de comprar o DoramaPlay</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-[#1a1432]/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <nav className="flex items-center justify-between">
            {/* Mobile Navigation - Visible on mobile, hidden on desktop */}
            <div className="flex lg:hidden items-center gap-2 text-xs flex-1">
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Planos
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Doramas
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Nossos Doramas
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Assista na TV
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Depoimentos
              </a>
            </div>

            <div className="flex-1 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center">
              <div className="text-center leading-none">
                <div
                  className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                  style={{
                    fontFamily: "var(--font-dancing-script)",
                    textShadow: "0 0 20px rgba(167, 139, 250, 0.5), 0 0 40px rgba(167, 139, 250, 0.2)",
                  }}
                >
                  Dorama
                  <span
                    className="text-[#00ff88] ml-1"
                    style={{
                      textShadow: "0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 255, 136, 0.3)",
                    }}
                  >
                    Play
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation Right - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Planos
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                Garantia
              </a>
              <a href="/oferta" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex-1 lg:hidden"></div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1f]/80 via-[#0f0a1f]/60 to-[#0f0a1f]" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 leading-tight">
            <span className="text-white">Acesso Vitalício a +1000 Doramas</span>
          </h1>

          <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Dublados ou legendados. Assista direto no seu celular. Sem propagandas.
          </p>

          <div className="relative max-w-sm mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-[3rem] p-1 shadow-2xl shadow-pink-500/30">
              <div className="bg-[#1c1233] rounded-[2.8rem] overflow-hidden">
                <div className="relative aspect-[9/19.5]">
                  <video
                    id="dorama-video"
                    className="w-full h-full object-cover rounded-[2.7rem]"
                    loop
                    playsInline
                    controls
                    poster="/images/captura-20de-20tela-20-2890-29.png"
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%20doroma%20site-ywbKVeyPNrWIZ0WwBhoQnRuu7Gw6zm.mp4" type="video/mp4" />
                  </video>

                  {!isPlaying && (
                    <button
                      onClick={handlePlayVideo}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[2.7rem] cursor-pointer group"
                    >
                      <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="block w-full max-w-md bg-[#00ff00] hover:bg-[#00dd00] text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] text-center uppercase"
            >
              GARANTIR ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0f0a1f] to-[#1a1432]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">O que você vai receber?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="mb-6">
                <div className="flex justify-center gap-3">
                  <div className="w-14 h-14 bg-pink-600/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                    <Monitor className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="w-14 h-14 bg-pink-600/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                    <Smartphone className="w-7 h-7 text-pink-400" />
                  </div>
                  <div className="w-14 h-14 bg-pink-600/20 rounded-xl flex items-center justify-center border border-pink-500/30">
                    <Tablet className="w-7 h-7 text-pink-400" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Assista onde quiser!</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Com nosso aplicativo, você pode curtir seus doramas favoritos na TV, celular, tablet ou computador. A
                diversão não tem limites!
              </p>
            </div>

            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-pink-600/20 rounded-2xl flex items-center justify-center border border-pink-500/30">
                <Download className="w-12 h-12 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Baixe doramas para assistir offline</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Salve seus títulos favoritos e sempre tenha algo para assistir, mesmo sem internet.
              </p>
            </div>

            <div className="group text-center bg-[#1e1538] rounded-3xl p-8 border-2 border-transparent hover:border-pink-500 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-6 bg-pink-600/20 rounded-2xl flex items-center justify-center border border-pink-500/30">
                <div className="relative">
                  <DollarSign className="w-12 h-12 text-pink-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-pink-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pagamento único, sem mensalidades</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Pague apenas uma vez e aproveite o acesso ilimitado a todos os doramas, sem surpresas de mensalidades.
              </p>
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
              className="block w-full max-w-md bg-[#00ff00] hover:bg-[#00dd00] text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] text-center uppercase"
            >
              GARANTIR ACESSO
            </button>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 px-4 bg-[#0f0a1f] overflow-hidden relative">
        <div className="container mx-auto max-w-6xl px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight">
            <span className="text-white">+1000 </span>
            <span className="text-pink-400">doramas e minisséries</span>
            <span className="text-white"> dubladas</span>
          </h2>

          <div className="mb-8 group">
            <div className="flex gap-4 animate-scroll-right group-hover:pause-animation">
              {[...dramaPostersRow1, ...dramaPostersRow1].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster || "/placeholder.svg"}
                    alt={`Drama ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="group">
            <div className="flex gap-4 animate-scroll-left group-hover:pause-animation">
              {[...dramaPostersRow2, ...dramaPostersRow2].map((poster, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-72 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={poster || "/placeholder.svg"}
                    alt={`Drama ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1a1432] to-[#0f0a1f]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">O que nossas clientes estão dizendo</h2>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="/images/new-testimonial-1.jpg"
                alt="Depoimento cliente 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="/images/new-testimonial-2.jpg"
                alt="Depoimento cliente 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="/images/new-testimonial-3.jpg"
                alt="Depoimento cliente 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="block w-full max-w-md bg-[#00ff00] hover:bg-[#00dd00] text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] text-center uppercase"
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
              <h3 className="text-3xl font-bold mb-6 text-pink-500 text-center">Plano Mensal</h3>

              <div className="mb-6 text-center">
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">R$9,99</span>
                  <span className="text-gray-400 ml-2">/ mês</span>
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

            <div className="bg-[#0a0a0a] rounded-3xl p-8 border-2 border-pink-500 relative transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] order-1 md:order-2">
              <div className="absolute -top-4 -right-4">
                <div className="bg-pink-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-pink-500/50 uppercase">
                  MELHOR OFERTA
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-6 mt-4 text-pink-500 text-center">Plano Vitalício</h3>

              <div className="mb-6 text-center">
                <div className="mb-3">
                  <span className="text-5xl font-bold text-white">R$ 17,90</span>
                  <span className="text-gray-400 ml-2">/ preço único</span>
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
                  <span className="text-white">Todos os benefícios do Mensal</span>
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
            className="block w-full bg-[#00ff00] hover:bg-[#00dd00] text-black font-bold py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] text-center uppercase"
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
            <p className="text-gray-400 text-center">© 2025 Dorama Passaport. Todos os direitos reservados.</p>

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
