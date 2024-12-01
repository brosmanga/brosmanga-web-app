import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <div className="relative bg-[url('/images/background.jpg')] text-white min-h-screen px-8 pt-16">
      <div className="absolute inset-0 bg-black opacity-60 z-1"></div>

      <div className="relative z-10 text-white">
        {/* Estrelas Decorativas */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Image
            src="/images/footer-star-left.png"
            alt="Estrela esquerda"
            className="absolute left-[18%] -top-40 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[400px] transform translate-y-1/2"
            width={200}
            height={250}
          />
          <Image
            src="/images/footer-star-right.png"
            alt="Estrela direita"
            className="absolute right-1/4 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
            width={200}
            height={200}
          />
          <Image
            src="/images/red-star.png"
            alt="Estrela centro direita"
            className="absolute right-[25%] top-[25%] right-4 w-8 lg:max-w-[20px] rotate-45"
            width={32}
            height={32}
          />
          <Image
            src="/images/red-star.png"
            alt="Estrela centro esquerda"
            className="absolute left-[14%] top-1/2 left-4 w-8 max-w-[100px] md:max-w-[150px] lg:max-w-[25px] rotate-45"
            width={20}
            height={20}
          />

          <Image
            src="/images/red-star.png"
            alt="Estrela centro direita"
            className="absolute right-[20%] bottom-1/4 right-4 w-8 lg:max-w-[20px] rotate-12"
            width={32}
            height={32}
          />
        </div>
      
        {/* Título Central */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">O que é o...</h2>
          <div className="flex justify-center items-center">
            <Image src="/images/logo.png" alt="BrosMangá!" width={80} height={80} />
          </div>
        </div>

        {/* Perguntas e Respostas */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Primeira Pergunta */}
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-2xl">•</span>
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">Quem somos nós?</h3>
              <p className="text-white">
                Somos um grupo focado em estimular o mercado de quadrinhos no Brasil através de
                artistas iniciantes. Dito isso, nós somos a BM, ou também chamados de BrosMangá, pessoas
                que, apesar de sermos só estudantes por agora, procuramos tentar expandir essa
                possibilidade para novos autores usando o nosso projeto.
              </p>
            </div>
          </div>

          {/* Segunda Pergunta */}
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-2xl">•</span>
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">Qual é a nossa motivação para o BM?</h3>
              <p className="text-white">
                Nossa motivação, surge através do nosso interesse mútuo no tema, consequentemente
                querendo nos aprofundar na variedade de conteúdo nacional de artistas menores. Assim
                descobrimos na pandemia que muitos artistas e mangakas enfrentam, sendo muito relacionado
                à visibilidade e também à necessidade de, por exemplo, editores para publicarem suas obras.
              </p>
            </div>
          </div>

          {/* Terceira Pergunta */}
          <div className="flex items-start space-x-4">
            <span className="text-red-500 text-2xl">•</span>
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">O que é o nosso projeto?</h3>
              <p className="text-white">
                Nosso projeto se trata de um site de mangás e quadrinhos/comics que, no geral, é feito
                para pequenos artistas e leitores interessados em conteúdos novos e nacionais de artistas
                menores. Ele inclui diversas funcionalidades, sendo voltado tanto aos autores de obras
                quanto aos leitores que estão lá apenas para lerem as obras em questão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;