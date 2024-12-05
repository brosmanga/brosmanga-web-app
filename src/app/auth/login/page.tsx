"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { login } from "../../../../actions/login";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { signInFormSchema } from "@/schemas/FormSchemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const Login: React.FC = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function handleSubmit(values: z.infer<typeof signInFormSchema>) {
    startTransition(() => {
      login(values);
    });
  }

  return (
    <div className="relative bg-[url('/images/background_escuro.png')] bg-cover bg-center min-h-screen flex items-center justify-center">
        

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        
        <div className="absolute top-4 right-4 text-white text-sm z-10">
          <a href="#" className="hover:text-red-500">
            Não tem uma conta? Crie uma agora mesmo!
          </a>
        </div>

        <div className="absolute inset-0 z-0 p-6">
          {/* Estrelas do lado esquerdo */}
          <Image
            src="/images/estrela_1.png"
            alt="Estrelas do lado esquerdo"
            className="absolute top-[10%] left-[5%] h-[40%] w-auto lg:h-[80%] pointer-events-none"
            width={400}
            height={800} // Ajuste conforme necessário
          />
          {/* Estrelas do lado direito */}
          <Image
            src="/images/estrela_2.png"
            alt="Estrelas do lado direito"
             className="absolute top-[2%] right-[5%] h-[40%] w-auto lg:h-[80%] pointer-events-none"
            width={400}
            height={100} // Ajuste conforme necessário
          />
        </div>

        <div className="relative z-10 w-full max-w-md bg-black/75 p-6 rounded-xl shadow-lg">

          {/* Logo */}
          <div className="w-full flex items-center justify-center mb-4">
            <Image src="/images/logo.png" width={100} height={100} alt="Logo BrosMangá" />
          </div>

          {/* Forgot links */}
          <div className="flex justify-between text-sm text-red-400">
            <a href="#">Esqueceu seu nome de usuário?</a>
            <a href="#">Esqueceu sua senha?</a>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-4 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome de Usuário/E-mail</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Senha</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full bg-red-600 hover:bg-red-500" type="submit" disabled={isPending}>
                Entrar
              </Button>
            </form>
          </Form>

          <Separator className="my-4" />
          <p className="text-center text-sm text-gray-400">Conecte-se também com</p>
          <div className="flex justify-center gap-4 mt-2">
            <button className="text-white hover:text-gray-300">
              <i className="fab fa-google text-2xl"></i>
            </button>
            <button className="text-white hover:text-gray-300">
              <i className="fab fa-discord text-2xl"></i>
            </button>
            <button className="text-white hover:text-gray-300">
              <i className="fab fa-facebook text-2xl"></i>
            </button>
          </div>

          
        </div>

        {/* Bottom Links */}
        <div className="absolute bottom-4 w-full text-center text-sm text-gray-400">
          <p className="text-white font-bold">BrosMangá!</p>
          <div className="flex justify-center gap-8 mt-2 text-base">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">FAQ</a>
            <a href="#" className="hover:text-white">Contato</a>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Login;
