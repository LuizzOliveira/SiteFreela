import Link from 'next/link'
import { ArrowRight, Leaf, Shield, Map, Scale } from 'lucide-react'

export default function Servicos() {
  const serviceCategories = [
    {
      icon: Leaf,
      title: 'AMBIENTAL',
      description: 'Soluções completas para licenciamento e gestão ambiental',
      color: 'bg-green-500',
      services: [
        'Licenciamento Ambiental',
        'Licenciamento Mineral',
        'Poço Artesiano',
        'Outorga de Direito de Uso de Recursos Hídricos',
        'Estudos Ambientais',
        'Monitoramento Ambiental',
        'Cadastro Ambiental Rural'
      ]
    },
    {
      icon: Shield,
      title: 'SEGURANÇA DO TRABALHO',
      description: 'Proteção e segurança para seus colaboradores',
      color: 'bg-blue-500',
      services: [
        'Plano de Gerenciamento de Riscos - PGR',
        'Laudo Técnico das Condições Ambientais de Trabalho – LTCAT',
        'Laudo de Insalubridade e Periculosidade',
        'Plano de Prevenção Contra Incêndio'
      ]
    },
    {
      icon: Map,
      title: 'TOPOGRAFIA E GEOPROCESSAMENTO',
      description: 'Precisão e tecnologia em levantamentos topográficos',
      color: 'bg-orange-500',
      services: [
        'Levantamento Planialtimétrico',
        'Locação de Obras',
        'Georreferenciamento',
        'Sensoriamento Remoto'
      ]
    },
    {
      icon: Scale,
      title: 'PERÍCIA',
      description: 'Expertise técnica para processos judiciais e extrajudiciais',
      color: 'bg-purple-500',
      services: [
        'Laudos Periciais Judiciais e Extrajudiciais',
        'Assistência Técnica em processos judiciais',
        'Inspeção de obras civis e de infraestrutura'
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-primary-100 font-body max-w-3xl mx-auto">
              Oferecemos soluções completas e personalizadas para atender às 
              necessidades específicas de cada projeto e cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover font-body">
                <div className={`${category.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <category.icon className="h-8 w-8" />
                    <div>
                      <h2 className="text-2xl font-title font-bold">{category.title}</h2>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center justify-between">
                        <span className="text-gray-700">{service}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/contato"
                      className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center justify-center"
                    >
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
              Nosso processo é estruturado para garantir a qualidade e eficiência 
              em cada etapa do projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Análise Inicial',
                description: 'Avaliamos suas necessidades e definimos o escopo do projeto'
              },
              {
                step: '02',
                title: 'Planejamento',
                description: 'Desenvolvemos um plano detalhado com cronograma e metodologia'
              },
              {
                step: '03',
                title: 'Execução',
                description: 'Implementamos as soluções com acompanhamento constante'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Finalizamos com relatórios completos e suporte contínuo'
              }
            ].map((item, index) => (
              <div key={index} className="text-center font-body">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-title font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-title font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-title font-bold text-gray-900 mb-4">
            Precisa de uma consultoria especializada?
          </h2>
          <p className="text-lg text-gray-600 font-body mb-8">
            Entre em contato conosco e descubra como podemos ajudar seu projeto 
            a ser desenvolvido com responsabilidade ambiental e conformidade legal.
          </p>
          <Link
            href="/contato"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-title font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
          >
            Falar com Especialista
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
