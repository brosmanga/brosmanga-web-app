'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FeedbackPage() {
  return (
    <div className="page-layout">
      {/* Cabeçalho */}
      <Header />

      {/* Conteúdo principal */}
      <main className="main-layout">
        <div className="bg-black min-h-screen flex items-center justify-center text-white">
          {/* Caixa principal com borda */}
          <div className="bg-gray-900 rounded-lg border-2 border-orange-500 p-8 w-full max-w-3xl shadow-md relative">
            {/* Título e estrelas decorativas */}
            <div className="absolute -top-6 left-6 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l1.09 3.36h3.54l-2.87 2.08L14.6 11 12 8.92 9.4 11l1.13-3.56L7.66 5.36h3.54L12 2z" />
              </svg>
            </div>
            <div className="absolute -top-6 right-6 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2l1.09 3.36h3.54l-2.87 2.08L14.6 11 12 8.92 9.4 11l1.13-3.56L7.66 5.36h3.54L12 2z" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-center mb-4">Feedback!</h1>
            <p className="text-center text-gray-300">
              Adoraríamos saber como foi sua experiência com nossos serviços, sua
              opinião é extremamente valiosa para melhorarmos ainda mais!
            </p>

            {/* Campo de texto para opinião */}
            <textarea
              className="w-full mt-6 p-4 rounded-md bg-gray-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows={5}
              placeholder="Dê sua opinião aqui!"
            ></textarea>

            {/* Botão enviar */}
            <div className="flex justify-end mt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-2 rounded-md">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
