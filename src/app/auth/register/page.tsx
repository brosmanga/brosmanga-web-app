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
import { useRouter, usePathname } from "next/navigation";

const Login: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const registrationSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    username: z.string().nonempty("O nome de usuário é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string().min(6, "A confirmação de senha é obrigatória"),
    birthDate: z.string().nonempty("Data de nascimento é obrigatória"),
    phone: z.string().nonempty("Número de telefone é obrigatório"),
  });

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
      phone: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof registrationSchema>) {
    // Validação simples: verifica se ambos os campos estão preenchidos
    if (!values.email || !values.password || !values.birthDate || !values.confirmPassword || !values.name || !values.username || !values.phone) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Se os campos estiverem preenchidos, redireciona para a home
    router.push("/home");
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

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              {/* Nome */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nome de Usuário */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome de Usuário</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* E-mail */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">E-mail</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex space-x-4">
                {/* Senha */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-white">Senha</FormLabel>
                      <FormControl>
                        <Input disabled={isPending} type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Confirmar Senha */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel className="text-white">Confirmar Senha</FormLabel>
                      <FormControl>
                        <Input disabled={isPending} type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Data de Nascimento */}
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Data de Nascimento</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} placeholder="DD/MM/AAAA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Telefone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Número de Telefone</FormLabel>
                    <FormControl>
                      <Input disabled={isPending} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Botão */}
              <Button className="w-full bg-red-600 hover:bg-red-500" type="submit" disabled={isPending}>
                Criar
              </Button>
            </form>
          </Form>
            
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
