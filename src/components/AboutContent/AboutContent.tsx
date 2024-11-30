import React from "react";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <div className="relative bg-black text-white min-h-screen px-8 pt-16">
      {/* Estrelas Decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/star-left.png"
          alt="Estrela esquerda"
          className="absolute top-16 left-8 w-8"
          width={32}
          height={32}
        />
        <Image
          src="/images/star-right.png"
          alt="Estrela direita"
          className="absolute top-16 right-8 w-8"
          width={32}
          height={32}
        />
        <Image
          src="/images/star-center-left.png"
          alt="Estrela centro esquerda"
          className="absolute bottom-1/4 left-4 w-8"
          width={32}
          height={32}
        />
        <Image
          src="/images/star-center-right.png"
          alt="Estrela centro direita"
          className="absolute bottom-1/4 right-4 w-8"
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
            <p className="text-gray-300">
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
            <p className="text-gray-300">
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
            <p className="text-gray-300">
              Nosso projeto se trata de um site de mangás e quadrinhos/comics que, no geral, é feito
              para pequenos artistas e leitores interessados em conteúdos novos e nacionais de artistas
              menores. Ele inclui diversas funcionalidades, sendo voltado tanto aos autores de obras
              quanto aos leitores que estão lá apenas para lerem as obras em questão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;