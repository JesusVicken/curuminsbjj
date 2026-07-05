"use client";

import React, { useState } from "react";
import { Button } from "@/components/UI/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    supportType: "transporte",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        supportType: "transporte",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {isSuccess ? (
        <div className="rounded-2xl bg-emerald-950/10 p-6 text-center border border-emerald-900/20">
          <h3 className="text-base font-bold text-emerald-400">
            Mensagem Enviada!
          </h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
            Agradecemos de coração pelo seu contato e disposição em apoiar os curumins. 
            Daniel BJJ entrará em contato via WhatsApp nas próximas horas.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-4 border-emerald-900/40 text-emerald-400 hover:bg-emerald-900/10 hover:border-emerald-500"
            onClick={() => setIsSuccess(false)}
          >
            Voltar
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Seu Nome / Empresa
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João Silva"
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                WhatsApp / Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex: (61) 99999-9999"
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                E-mail de Contato
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: joao@email.com"
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300"
              />
            </div>

            {/* Support Type */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="supportType" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                Como deseja Apoiar?
              </label>
              <select
                id="supportType"
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white focus:outline-none focus:border-gold-accent transition-all duration-300 cursor-pointer"
              >
                <option value="transporte" className="bg-zinc-950 text-white">Transporte (Competição 16/05)</option>
                <option value="financeiro" className="bg-zinc-950 text-white">Donativo Financeiro Voluntário</option>
                <option value="equipamento" className="bg-zinc-950 text-white">Kimonos e Equipamentos</option>
                <option value="voluntario" className="bg-zinc-950 text-white">Desejo ser Instrutor Voluntário</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              Sua Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva aqui sua intenção de apoio ou dúvidas sobre o projeto."
              className="p-4 rounded-3xl border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold-accent focus:ring-1 focus:ring-gold-accent/20 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit button */}
          <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting}>
            Enviar Mensagem de Apoio
          </Button>
        </>
      )}
    </form>
  );
};
export default ContactForm;
