'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react'

export default function Home() {
  const services = [
    {
      title: 'Estudos e Licenciamento Ambiental',
      items: [
        'Licenciamento Ambiental (LP, LI e LO)',
        'Plano de Controle Ambiental (PCA)',
        'Plano de Engenharia Ambiental (PEA)',
        'Plano de Atendimento Emergência (PAE)',
        'Plano de Emergência Individual (PEI)',
        'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
        'Plano Básico Ambiental (PBA)',
        'Relatório de Controle Ambiental (RCA)',
        'Estudos de Impacto (EIA/RIMA/EIV)',
        'Inventário Florestal'
      ]
    },
    {
      title: 'Monitoramento e Gestão dos Programas Ambientais',
      items: [
        'Equipamentos de última geração para monitoramento',
        'Gestão em Projetos de Resíduos',
        'Gestão em Projetos de Águas',
        'Gestão em Projetos de Efluentes',
        'Monitoramento de Águas Superficiais',
        'Monitoramento de Ruídos Ambientais'
      ]
    },
    {
      title: 'Relatórios',
      items: [
        'Relatório Ambiental de Informação Anual – RIAA',
        'Relatório Anual de Atividades Potencialmente Poluidoras – RAPP'
      ]
    },
    {
      title: 'Assessoria Jurídica',
      items: [
        'Mapeamento de obrigações legais e prevenção de multas',
        'Revisão de condicionantes, pareceres e defesas',
        'Assessoria à TACs – ações coletivas e individuais'
      ]
    }
  ]

  const cadastros = [
    { title: 'Registros Profissionais', description: 'CREA, CRQ, OAB' },
    { title: 'Cadastro Técnico Federal do IBAMA', description: 'CTF - Atividades de defesa ambiental' },
    { title: 'Cadastro Técnico de Atividades de Defesa Ambiental', description: 'CTDAM - Atividades de defesa ambiental' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/images/hero_bg.png')] bg-cover bg-center text-white min-h-screen">
        <div className="absolute inset-0 bg-bioamaGreen opacity-40"></div>
        <div className="absolute bottom-16 w-full text-center">
          <div className="text-xl md:text-2xl text-green-200 font-semibold font-title">
            Consultoria Ambiental
          </div>
        </div>
        <div className="absolute bottom-6 w-full text-center">
          <ChevronDown className="h-8 w-8 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Empresa Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-200 to-gray-50 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-title font-bold text-gray-900 mb-6">EMPRESA</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 font-body">
              <p>
                A BIOAMA é uma empresa altamente especializada na prestação de serviços de assessoria e consultoria de meio ambiente, proporcionando soluções para diversos segmentos na área ambiental. Estamos empenhados em propor soluções sustentáveis para os desafios ambientais de nossos clientes, de modo a atender suas necessidades e superar suas expectativas.
              </p>
              <p className="font-semibold text-bioamaGreen font-highlight">
                10 anos trazendo soluções sustentáveis à união entre desenvolvimento econômico e meio ambiente, no Estado do Pará.
              </p>
              <p className="font-semibold font-body">
                Seja qual for o ramo de sua atividade, temos a solução.
              </p>
              <p className="font-semibold font-body">
                Profissionais com MBA em perícia, auditoria e gestão ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cadastros Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-4">CADASTROS</h2>
            <p className="text-lg text-gray-600 font-body">
              Confira nossos diferenciais de qualidade e conformidade:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cadastros.map((cadastro, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-title font-semibold text-gray-900 mb-3">{cadastro.title}</h3>
                <p className="text-gray-600 font-body">{cadastro.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-16 bg-bioamaGreen text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-title font-bold mb-6">Nossa Missão</h2>
          <p className="text-xl mb-8 font-body">
            Nossa missão é alinhar a iniciativa privada, o trabalho e o desenvolvimento econômico com o meio ambiente, a fauna, a flora e com os recursos naturais.
          </p>
          <p className="text-lg font-body">
            Para empresas que atuam com responsabilidade, preocupando-se com a geração de renda e com a preservação do meio ambiente.
          </p>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-4">SERVIÇOS</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto font-body">
              Possuímos uma equipe especializada e experiente na condução de diagnósticos ambientais, licenciamentos, proposição de medidas através de planos, programas e projetos, assessoria técnica e ambiental preventiva, avaliação de impactos ambientais, dentre outros.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-title font-semibold text-bioamaGreen mb-4">{service.title}</h3>
                <ul className="space-y-2 font-body">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-bioamaGreen mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
