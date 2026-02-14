"use client"

import { useState, useEffect } from "react"
import { Crown, Check, Shield } from "lucide-react"

export default function OfertaPage() {
  const [timeLeft, setTimeLeft] = useState(8 * 60 + 2) // 8:02 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1f] via-[#141433] to-[#0a0a1f] text-white">
      <header className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a1f]/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-pink-500/50 bg-pink-500/10 shadow-lg shadow-pink-500/30">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span className="text-sm font-bold text-pink-300 uppercase tracking-wide">OFERTA EXCLUSIVA DE SAÍDA</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-6">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ textShadow: "0 0 30px rgba(236, 72, 153, 0.3), 0 0 60px rgba(236, 72, 153, 0.2)" }}
          >
            PARE! Você desbloqueou
            <br />
            uma{" "}
            <span
              className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent"
              style={{ textShadow: "0 0 40px rgba(236, 72, 153, 0.4), 0 0 80px rgba(236, 72, 153, 0.3)" }}
            >
              condição única.
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Apenas por ter chegado até aqui, liberamos o{" "}
            <span className="text-pink-400 font-semibold">Acesso Premium Vitalício</span> com o maior desconto que já
            oferecemos. Esta página não aparecerá novamente.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 rounded-full shadow-lg shadow-red-500/30">
            <div className="text-center">
              <span className="text-white font-semibold">
                Sua oferta expira em:{" "}
                <span className="text-xl font-bold">
                  {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="relative max-w-lg mx-auto mb-16">
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white font-bold px-6 py-3 rounded-tl-2xl rounded-br-2xl shadow-lg rotate-0">
              <div className="text-xs">-26% OFF</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border-2 border-pink-500/30 rounded-3xl p-8 shadow-2xl shadow-pink-500/20">
            {/* Best Offer Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-bold uppercase">NOSSA MELHOR OFERTA</span>
              </div>
            </div>

            {/* Plan Title */}
            <h2 className="text-3xl font-bold text-center mb-6">PLANO PREMIUM</h2>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="text-gray-400 line-through text-xl mb-2">de R$27,00</div>
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent mb-2">
                R$12,90
              </div>
              <div className="text-xl text-white font-semibold">Pagamento Único</div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Acesso Vitalício a +3.500 Doramas",
                "Conteúdo em Alta Definição (HD)",
                "Assista em múltiplos aparelhos",
                "Lançamentos diários e exclusivos",
                "Comunidade VIP com +500 dorameiras",
                "Suporte prioritário 24/7",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://doramapremium.mycartpanda.com/checkout/205314752:1"
              className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50 mb-4 text-center"
            >
              ⚡ EU QUERO O ACESSO PREMIUM
            </a>

            {/* Security Text */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Pagamento 100% seguro • Acesso imediato • Garantia de 7 dias</span>
            </div>
          </div>
        </div>

        {/* 60 Days Guarantee section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm border-2 border-pink-500/20 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Badge */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-pink-500/50">
                    <div className="w-44 h-44 rounded-full bg-gradient-to-br from-purple-900 to-purple-800 flex flex-col items-center justify-center border-4 border-white/20">
                      <div className="text-6xl font-bold text-pink-400">60</div>
                      <div className="text-xl font-bold text-white uppercase">Dias</div>
                      <div className="text-sm text-gray-300 uppercase">Garantia</div>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-pink-500 opacity-60 animate-pulse" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-purple-500 opacity-60 animate-pulse" />
                </div>
              </div>

              {/* Right side - Text */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">Garantia de 60 Dias</h3>
                  <p className="text-gray-300">
                    Se você não ficar 100% satisfeita com o acesso, devolvemos seu dinheiro integralmente em até 60 dias
                    após a compra.
                  </p>
                </div>

                <div className="bg-purple-900/30 rounded-xl p-4 border border-pink-500/20">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Risco Zero</h4>
                      <p className="text-sm text-gray-300">Sua satisfação ou seu dinheiro de volta. Simples assim.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Junte-se a milhares de{" "}
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Dorameiras Felizes
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {["/images/testimonial-1.webp", "/images/testimonial-2.webp", "/images/testimonial-3.webp"].map(
              (img, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <img src={img || "/placeholder.svg"} alt={`Depoimento ${index + 1}`} className="w-full h-auto" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* Final warning and CTA */}
        <div className="text-center space-y-6">
          <div className="inline-block px-6 py-3 bg-yellow-500/20 border-2 border-yellow-500 rounded-lg">
            <p className="text-yellow-300 font-bold">Atenção: Esta é sua única chance!</p>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Depois que esta página fechar, a oferta Premium por este valor desaparecerá para sempre. Não perca!
          </p>

          <a
            href="https://doramapremium.mycartpanda.com/checkout/205314752:1"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-lg px-12 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/50"
          >
            ⚡ SIM, EU QUERO MEU ACESSO PREMIUM
          </a>
        </div>
      </main>
    </div>
  )
}
