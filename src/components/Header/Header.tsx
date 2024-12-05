"use client"
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter, usePathname } from "next/navigation";

const Header: React.FC = () => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname.split('/'))

  const activeRedButton = (route: string) => pathname.split('/')[1] === route ? "bg-red-600 text-white" : "bg-transparent text-red-400";
  
  return (
    <header className="bg-black text-white py-3 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo e Nome */}
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Logo BrosMangá" className="h-10" />
          <h1 className="text-xl font-bold text-red-500">BrosMangá!</h1>
        </div>

        {/* Navegação */}
        <nav className="flex items-center space-x-4">
          <button className={`border-2 border-red-500 ${activeRedButton("home")} text-white py-1 px-4 rounded-full hover:bg-red-500`} onClick={() => router.push('/home')}>
            Home
          </button>
          <button className={`border-2 border-red-500 ${activeRedButton("series")}  text-white py-1 px-4 rounded-full hover:bg-red-500 hover:text-white`} onClick={() => router.push('/series/all')}>
            Séries
          </button>
          <button className={`border-2 border-red-500 ${activeRedButton("about")} text-white py-1 px-4 rounded-full hover:bg-red-500 hover:text-white`} onClick={() => router.push('/about')}>
            Sobre
          </button>
          <button className="bg-yellow-500 text-black py-1 px-4 rounded-full hover:bg-yellow-400 font-semibold">
            Postar!
          </button>
        </nav>


        <div className="relative">
          <Popover>
            {/* Avatar como gatilho */}
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>

            {/* Conteúdo do Menu */}
            <PopoverContent
              align="end"
              className="w-56 bg-black text-white rounded-md shadow-lg border border-gray-700"
            >
              {/* Informações do usuário */}
              <div className="px-4 py-2 border-b border-gray-700">
                <p className="text-sm font-bold">Fabiano Barros Rocha</p>
                <p className="text-xs text-red-500">@zzayaya</p>
              </div>

              {/* Links do Menu */}
              <ul className="py-2 space-y-1 text-sm">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                    Perfil
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                    Configurações
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                    Histórico
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-700">
                    Feedback
                  </button>
                </li>
              </ul>

              {/* Logout */}
              <div className="border-t border-gray-700">
                <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700">
                  Logout
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
   
      {/* Linha Vermelha */}
      <div className="border-t-2 border-red-500 mt-2"></div>
    </header>
  );
};

export default Header;
