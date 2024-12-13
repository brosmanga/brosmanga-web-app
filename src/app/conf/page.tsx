"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const ConfigurationPage = () => {
  const [activeTab, setActiveTab] = useState("Conta");

  const renderContent = () => {
    switch (activeTab) {
      case "Conta":
        return (
          <div className="p-6 bg-gray-100 rounded-lg shadow-md relative">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Conta</h2>
            <div className="flex gap-6 items-center">
              <img
                  src="https://github.com/shadcn.png"
                  alt="Avatar do usuário"
                  className="w-24 h-24 rounded-full bg-gray-700"
                />
              <div>
                <p className="text-xl font-medium text-gray-800">Marcos Paulo Silva de Souza</p>
                <p className="text-gray-600">Endereço de E-mail: ******sz54@gmail.com</p>
                <p className="text-gray-600">Telefone: +55 ** ****-4187</p>
              </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600">
              Editar Informações
            </button>
          </div>
        );
      case "Segurança":
        return (
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Segurança</h2>
            <p className="text-gray-600 mb-4">Filtro de Obras</p>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="filter" value="disabled" />
                <span className="text-gray-800">Desativado (Toda obra será mostrada)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="filter" value="partial" />
                <span className="text-gray-800">Parcial (Deixará de mostrar algumas obras)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="filter" value="enabled" />
                <span className="text-gray-800">Ativado (Censurará a maioria das obras de temas mais sensíveis)</span>
              </label>
            </div>
          </div>
        );
      case "Aparência":
        return (
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Aparência</h2>
            <p className="text-gray-600">Tema</p>
            <div className="flex gap-6 my-4">
              <button className="w-10 h-10 bg-white border rounded-full shadow-md"></button>
              <button className="w-10 h-10 bg-black border rounded-full shadow-md"></button>
            </div>
            <p className="text-gray-600">Escala de Fonte de Chat</p>
            <input type="range" min="12" max="24" step="1" className="w-full mt-4" />
          </div>
        );
      case "Idioma e Chat":
        return (
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Idioma e Chat</h2>
            <p className="text-gray-600">Idioma</p>
            <div className="grid grid-cols-2 gap-6 my-4">
              <button className="p-4 border rounded-lg bg-white shadow-sm text-black">Português (BR)</button>
              <button className="p-4 border rounded-lg bg-white shadow-sm text-black">English (US)</button>
              <button className="p-4 border rounded-lg bg-white shadow-sm text-black">Español</button>
              <button className="p-4 border rounded-lg bg-white shadow-sm text-black">日本語</button>
            </div>
            <p className="text-gray-600">Filtro de Chat</p>
            <div className="space-y-4 mt-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="chatFilter" value="disabled" />
                <span className="text-gray-800">Desativado (Nada será censurado)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="chatFilter" value="partial" />
                <span className="text-gray-800">Parcial (Censurará falas de baixo calão, apenas)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="chatFilter" value="enabled" />
                <span className="text-gray-800">Ativado (Censurará tudo que pode ser considerado ofensivo)</span>
              </label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-layout">
      <Header/>
      <main className="main-layout"></main>
        <div className="bg-black min-h-screen text-white">
          <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-8">Configurações</h1>
            <div className="flex">
              <aside className="w-1/4">
                <nav className="space-y-4">
                  {["Conta", "Segurança", "Aparência", "Idioma e Chat"].map((tab) => (
                    <button
                      key={tab}
                      className={`block w-full p-4 text-left rounded-lg font-semibold ${
                        activeTab === tab ? "bg-orange-500 text-black" : "bg-gray-800 text-white"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </aside>
              <main className="w-3/4 pl-8">{renderContent()}</main>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  );
};

export default ConfigurationPage;
