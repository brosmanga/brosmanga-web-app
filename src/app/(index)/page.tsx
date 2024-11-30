"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

const Index: React.FC = () => {
  const router = useRouter();

  return (
    <div className="relative bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-red-500">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="BrosMangá!" width={40} height={40} />
          <h1 className="text-xl font-bold text-red-500">BrosMangá!</h1>
        </div>

        {/* Botões de Navegação */}
        <div className="flex space-x-4">
          <Button className="border border-white bg-black px-4 py-2 rounded hover:bg-gray-800">
            EXPLORAR
          </Button>
          <Button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500" onClick={() => router.push('/auth/login')}>
            ENTRAR
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative px-8 py-16">
        {/* Estrelas Decorativas */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/footer-star-left.png"
            alt="Estrela esquerda"
            className="absolute right-4 sm:right-8 w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[200px]"
            width={200}
            height={200}
          />
          <Image
            src="/images/footer-star-right.png"
            alt="Estrela direita"
            className="absolute w-auto max-w-[100px] md:max-w-[150px] lg:max-w-[400px] transform translate-y-1/2"
            width={200}
            height={200}
          />
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight mb-6">
            Seja mangás, comics, HQs aqui é o seu lugar, na BrosMangá!
          </h2>
          <Button className="bg-black text-white py-3 px-6 rounded hover:bg-red-500 font-semibold border border-red-500" onClick={() => router.push('/auth/register')}>
            <span className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Ícone" width={24} height={24} />
              <span>SE CADASTRE AGORA MESMO E CURTA INÚMERAS OBRAS OU POSTE AS SUAS</span>
            </span>
          </Button>

          <p className="mt-8 text-white font-bold text-left">
            E caso goste do trabalho que fazemos aqui, considere deixar seu feedback ou fazer sua
            assinatura premium, ambos nos ajudariam muito! Boa leitura!
          </p>

          <Button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 flex items-center space-x-2">
            <Image src="/icons/crown.png" alt="Premium" width={24} height={24} />
            <span>PREMIUM</span>
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Index;