'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

// Variáveis de ambiente
const DEFAULT_SERVICE = process.env.NEXT_PUBLIC_DEFAULT_SERVICE || ''
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: DEFAULT_SERVICE,
    mensagem: ''
  })

  // Máscara de telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '') // remove tudo que não é número
    if (value.length > 11) value = value.slice(0, 11)

    if (value.length > 6) {
      value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7)}`
    } else if (value.length > 2) {
      value = `(${value.slice(0,2)}) ${value.slice(2)}`
    } else if (value.length > 0) {
      value = `(${value}`
    }

    setFormData({ ...formData, telefone: value })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
  const validatePhone = (phone: string) => /^\(\d{2}\) \d{4,5}-\d{4}$/.test(phone)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { nome, email, telefone, servico, mensagem } = formData

    if (!nome || !email || !telefone || !servico || !mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    if (!validateEmail(email)) {
      alert('E-mail inválido.')
      return
    }

    if (!validatePhone(telefone)) {
      alert('Telefone inválido. Use o formato (XX) XXXXX-XXXX.')
      return
    }

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({ nome: '', email: '', telefone: '', empresa: '', servico: DEFAULT_SERVICE, mensagem: '' })
    })
    .catch((err) => {
      console.error('Erro ao enviar formulário:', err)
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.')
    })
  }

  const contactInfo = [
    { icon: Phone, title: 'Telefone', info: '(11) 9999-9999', description: 'Segunda a sexta, 8h às 18h' },
    { icon: Mail, title: 'E-mail', info: 'contato@ecoconsult.com.br', description: 'Resposta em até 24h' },
    { icon: MapPin, title: 'Endereço', info: 'São Paulo, SP', description: 'Atendemos todo o Brasil' },
    { icon: Clock, title: 'Horário', info: '8h às 18h', description: 'Segunda a sexta-feira' }
  ]

  const services = [
    'Licenciamento Ambiental',
    'Licenciamento Mineral',
    'Segurança do Trabalho',
    'Topografia',
    'Perícias Judiciais',
    'Outros'
  ]

  const faqs = [
    {
      question: 'Qual o prazo para obtenção de licenças ambientais?',
      answer:
        'O prazo varia conforme o tipo de licença e complexidade do projeto. Licenças simplificadas podem levar de 30 a 60 dias, enquanto projetos mais complexos podem levar de 6 meses a 1 ano.'
    },
    {
      question: 'Vocês atendem em todo o Brasil?',
      answer:
        'Sim, atendemos clientes em todo o território nacional. Nossa equipe está preparada para trabalhar remotamente e realizar visitas técnicas quando necessário.'
    },
    {
      question: 'Como é feito o orçamento dos serviços?',
      answer:
        'O orçamento é personalizado conforme a complexidade e escopo do projeto. Após análise inicial, fornecemos uma proposta detalhada com cronograma e valores.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-primary-100 font-body max-w-3xl mx-auto">
            Estamos prontos para ajudar você a desenvolver seu projeto com responsabilidade ambiental e conformidade legal.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16"  >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-40">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-6">Solicite um Orçamento</h2>
            <form onSubmit={handleSubmit} className="space-y-6 font-body">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input type="text" id="nome" name="nome" required value={formData.nome} onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="exemplo@email.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
                </div>
              </div>

              {/* Telefone e Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                  <input type="tel" id="telefone" name="telefone" required value={formData.telefone} onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
                </div>
              </div>

              {/* Serviço */}
              <div>
                <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse *</label>
                <select id="servico" name="servico" value={formData.servico} onChange={handleChange} required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="">Selecione um serviço</option>
                  {services.map((service, i) => <option key={i} value={service}>{service}</option>)}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                <textarea id="mensagem" name="mensagem" rows={4} required value={formData.mensagem} onChange={handleChange}
                  placeholder="Descreva seu projeto ou necessidade..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"/>
              </div>

              <button type="submit"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-title font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                Enviar Mensagem <Send className="ml-2 h-5 w-5"/>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-6">Informações de Contato</h2>
            <div className="space-y-6 font-body">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg"><item.icon className="h-6 w-6 text-primary-600"/></div>
                  <div>
                    <h3 className="text-lg font-title font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-primary-600 font-medium">{item.info}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
