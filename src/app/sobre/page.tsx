import { Target, Eye, Heart, Users } from 'lucide-react'

export default function Sobre() {
  const values = [
    {
      icon: Target,
      title: 'Responsabilidade Técnica',
      description: 'Nosso trabalho é pautado pela excelência técnica e conhecimento especializado em cada área de atuação.'
    },
    {
      icon: Eye,
      title: 'Conformidade Legal',
      description: 'Garantimos que todos os projetos estejam em total conformidade com as normas e legislações vigentes.'
    },
    {
      icon: Heart,
      title: 'Equilíbrio Ambiental',
      description: 'Buscamos o equilíbrio perfeito entre desenvolvimento econômico e preservação ambiental.'
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Oferecemos soluções personalizadas para atender às necessidades específicas de cada projeto.'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-title font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl text-primary-100 font-body max-w-3xl mx-auto">
              Conheça nossa história, missão e os valores que nos guiam na busca 
              pela excelência em consultoria ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-title font-bold text-gray-900 mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-gray-600 font-body">
                <p>
                  Somos uma empresa que atua nas áreas ambiental, de segurança do trabalho, 
                  topografia e perícias judiciais e extrajudiciais. Nosso trabalho é pautado 
                  pela responsabilidade técnica, pela conformidade legal e pelo equilíbrio 
                  entre desenvolvimento e preservação ambiental.
                </p>
                <p>
                  Com experiência prática em diferentes setores, oferecemos soluções 
                  personalizadas para que cada projeto avance de forma segura, sustentável 
                  e eficiente. Nosso propósito é oferecer segurança jurídica e ambiental, 
                  garantindo que projetos e processos ocorram com transparência, 
                  responsabilidade e respeito às normas vigentes.
                </p>
                <p>
                  Nossa equipe é formada por profissionais altamente qualificados e 
                  especializados, comprometidos em entregar resultados de excelência 
                  e contribuir para um desenvolvimento mais sustentável.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg font-body">
              <h3 className="text-2xl font-title font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Conduzir o desenvolvimento com responsabilidade ambiental, oferecendo 
                consultoria especializada que garanta a conformidade legal e a 
                sustentabilidade dos projetos.
              </p>
              <h3 className="text-2xl font-title font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser referência em consultoria ambiental, reconhecida pela excelência 
                técnica, inovação e compromisso com a preservação do meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-title font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-lg text-gray-600 font-body max-w-2xl mx-auto">
              Os princípios que norteiam nossa atuação e garantem a qualidade 
              dos nossos serviços.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center card-hover font-body">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-title font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 text-white rounded-lg p-8 md:p-12 font-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-title font-bold mb-4">
                  Experiência Comprovada
                </h2>
                <p className="text-primary-100 mb-6">
                  Anos de atuação no mercado nos proporcionaram conhecimento 
                  profundo das necessidades dos nossos clientes e das melhores 
                  práticas do setor.
                </p>
                <ul className="space-y-2 text-primary-100">
                  <li>✓ Mais de 15 anos de experiência</li>
                  <li>✓ Centenas de projetos executados</li>
                  <li>✓ Clientes em diversos setores</li>
                  <li>✓ Equipe multidisciplinar</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-6xl font-title font-bold mb-2">15+</div>
                <div className="text-xl text-primary-100">Anos de Experiência</div>
                <div className="text-4xl font-title font-bold mt-6 mb-2">500+</div>
                <div className="text-xl text-primary-100">Projetos Realizados</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
