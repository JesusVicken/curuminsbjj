"use client";

import React, { useState } from "react";
import { Button } from "@/components/UI/Button";

import { useLanguage } from "@/context/LanguageContext";

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/projetocuruminsbjj@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Novo Contato (${isEn ? "EN" : "PT"}) - Site Instituto Projeto Curumins BJJ`,
          Nome: formData.name,
          WhatsApp: formData.phone,
          Email: formData.email,
          TipoDeApoio: formData.supportType,
          Mensagem: formData.message,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          supportType: "transporte",
          message: "",
        });
      } else {
        alert(isEn ? "An error occurred while sending. Please try again or reach out on WhatsApp." : "Ocorreu um erro ao enviar. Por favor, tente novamente ou mande mensagem pelo WhatsApp.");
      }
    } catch (error) {
      alert(isEn ? "Connection error. Please check your internet and try again." : "Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      {isSuccess ? (
        <div className="rounded-2xl bg-emerald-950/10 p-6 text-center border border-emerald-900/20">
          <h3 className="text-base font-bold text-emerald-400">
            {isEn ? "Message Sent!" : "Mensagem Enviada!"}
          </h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-light">
            {isEn
              ? "We sincerely thank you for your willingness to support the indigenous youth. Professor Daniel will get back to you shortly."
              : "Agradecemos de coração pelo seu contato e disposição em apoiar os curumins. Daniel BJJ entrará em contato via WhatsApp nas próximas horas."}
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-4 border-emerald-900/40 text-emerald-400 hover:bg-emerald-900/10 hover:border-emerald-500 cursor-pointer"
            onClick={() => setIsSuccess(false)}
          >
            {isEn ? "Back" : "Voltar"}
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                {isEn ? "Your Name / Organization" : "Seu Nome / Empresa"}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={isEn ? "Ex: John Smith" : "Ex: João Silva"}
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent/20 transition-all duration-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                {isEn ? "WhatsApp / Phone (w/ Country Code)" : "WhatsApp / Telefone"}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={isEn ? "Ex: +1 (555) 000-0000" : "Ex: (61) 99999-9999"}
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                {isEn ? "Contact Email" : "E-mail de Contato"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex: contact@email.com"
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent/20 transition-all duration-300"
              />
            </div>

            {/* Support Type */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="supportType" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                {isEn ? "How would you like to support?" : "Como deseja Apoiar?"}
              </label>
              <select
                id="supportType"
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                className="h-12 px-4 rounded-full border border-white/5 bg-zinc-950/40 text-sm text-white focus:outline-none focus:border-red-accent transition-all duration-300 cursor-pointer"
              >
                <option value="transporte" className="bg-zinc-950 text-white">{isEn ? "Tournament Transportation" : "Transporte (Competições)"}</option>
                <option value="financeiro" className="bg-zinc-950 text-white">{isEn ? "Voluntary Financial Donation" : "Donativo Financeiro Voluntário"}</option>
                <option value="equipamento" className="bg-zinc-950 text-white">{isEn ? "Kimonos & Training Gear" : "Kimonos e Equipamentos"}</option>
                <option value="voluntario" className="bg-zinc-950 text-white">{isEn ? "Volunteer Instructor" : "Desejo ser Instrutor Voluntário"}</option>
                <option value="patrocinio" className="bg-zinc-950 text-white">{isEn ? "Corporate / Global Sponsorship" : "Patrocínio Corporativo"}</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              {isEn ? "Your Message" : "Sua Mensagem"}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={isEn ? "Describe your support intention or questions here." : "Descreva aqui sua intenção de apoio ou dúvidas sobre o projeto."}
              className="p-4 rounded-3xl border border-white/5 bg-zinc-950/40 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-red-accent focus:ring-1 focus:ring-red-accent/20 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit button */}
          <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
            {isEn ? "Send Support Message" : "Enviar Mensagem de Apoio"}
          </Button>
        </>
      )}
    </form>
  );
};
export default ContactForm;
