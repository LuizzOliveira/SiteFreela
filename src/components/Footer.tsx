import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Bioama Consultoria</h4>
            <p className="text-gray-400">
              Soluções ambientais e de segurança do trabalho com compromisso e excelência.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/servicos" className="hover:text-bioamaGreen">Licenciamento Ambiental</Link></li>
              <li><Link href="/servicos" className="hover:text-bioamaGreen">Segurança do Trabalho</Link></li>
              <li><Link href="/servicos" className="hover:text-bioamaGreen">Topografia</Link></li>
              <li><Link href="/servicos" className="hover:text-bioamaGreen">Perícias Judiciais</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex space-x-2">
                <Phone className="h-4 w-4" />
                <span>(93) 9126.2100</span>
              </div>
              <div className="flex space-x-2">
                <Mail className="h-4 w-4" />
                <span>atendimento@bioamaconsultoria.com</span>
              </div>
              <div className="flex space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Pará, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/bioamaconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bioamaGreen transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/bioamaconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bioamaGreen transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Direitos autorais */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BIOAMA – Consultoria Ambiental. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

  )
}
