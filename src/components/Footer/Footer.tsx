"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-neutral-900 min-w-full bg-cover bg-center text-white py-6 container overflow-y-hidden overflow-x-hidden"
    >
      <div className="container mx-auto text-center">
        {/* Título */}
        <h2 className="text-xl font-bold text-red-500 mb-2">BrosMangá!</h2>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-4">
          @ Copyright BrosMangá! 2024 - Todos os direitos reservados
        </p>

        {/* Links */}
        <div className="flex justify-center space-x-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Contato</a>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">

        <Image
          src="/images/footer-star-left.png"
          alt="Estrela à esquerda"
          className="absolute bottom-0 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[400px] transform translate-y-1/2"
          width={200}
          height={250}
        />
        <Image
          src="/images/footer-star-right.png"
          alt="Estrelas à direita"
          className="absolute bottom-[-5%] right-4 sm:right-8 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
          width={200}
          height={200}
        />
        <Image
          src="/images/boom.png"
          alt="Pequena estrela"
          className="absolute bottom-20 left-4 sm:left-60 max-w-[100px] md:max-w-[150px] lg:max-w-[50px]"
          width={200}
          height={200}
        />
        <Image
          src="/images/white-star.png"
          alt="Pequena estrela"
          className="absolute bottom-0 right-4 sm:right-60 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[50px]"
          width={200}
          height={200}
        />
        <Image
          src="/images/white-star.png"
          alt="Pequena estrela"
          className="absolute bottom-20 left-[40%] transform -translate-x-1/2 w-auto max-w-[50px] md:max-w-[75px] lg:max-w-[50px]"
          width={200}
          height={200}
        />
        <Image
          src="/images/white-star.png"
          alt="Pequena estrela"
          className="absolute bottom-2 left-[20%] transform -translate-x-1/2 w-auto max-w-[50px] md:max-w-[75px] lg:max-w-[50px]"
          width={200}
          height={200}
        />

      </div>

    </footer>
  );
};

export default Footer;
