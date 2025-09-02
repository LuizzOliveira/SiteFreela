# Site Consultoria Ambiental

Site institucional desenvolvido em Next.js 14 com Tailwind CSS para empresa de consultoria ambiental.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações (opcional)

## 📋 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Header fixo com navegação
- ✅ Páginas: Início, Sobre, Serviços, Contato
- ✅ Formulário de contato funcional
- ✅ Animações e hover effects
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para executar

1. **Instalar dependências:**

```bash
npm install
```

2. **Executar em modo desenvolvimento:**

```bash
npm run dev
```

3. **Acessar o site:**
   Abra [http://localhost:3000](http://localhost:3000) no navegador
4. **Build para produção:**

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
consultoria-ambiental/
├── src/
│   ├── app/
│   │   ├── contato/
│   │   │   └── page.tsx
│   │   ├── servicos/
│   │   │   └── page.tsx
│   │   ├── sobre/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Personalização

### Cores

As cores principais estão definidas em `tailwind.config.js`:

- **Primary**: Tons de verde (representando meio ambiente)
- **Secondary**: Tons de cinza

### Conteúdo

Para personalizar o conteúdo:

1. **Textos**: Edite os arquivos `.tsx` em `src/app/`
2. **Informações de contato**: Modifique `src/app/contato/page.tsx`
3. **Serviços**: Atualize `src/app/servicos/page.tsx`

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔧 Configurações Importantes

### SEO

Metadados configurados em `src/app/layout.tsx`:

- Title, description, keywords
- Open Graph tags
- Viewport responsivo

### Performance

- Lazy loading de imagens
- Otimização de fontes (Google Fonts)
- CSS otimizado com Tailwind
- Componentes otimizados

## 📞 Suporte

Para dúvidas sobre implementação ou customização, consulte:

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 📄 Licença

Este projeto foi desenvolvido para uso comercial da empresa de consultoria ambiental.

---

**Desenvolvido com ❤️ para impulsionar negócios sustentáveis**
