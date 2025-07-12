# 🌙☀️ Dark/Light Mode Toggle

Uma aplicação React moderna que demonstra a implementação de alternância de tema persistente entre modos claro e escuro, utilizando CSS Custom Properties, React hooks e Tailwind CSS.

## ✨ Funcionalidades

- 🎨 **Alternância de Tema**: Toggle suave entre modo claro e escuro
- 💾 **Persistência**: Tema salvo automaticamente no localStorage
- 🔄 **Detecção Automática**: Respeita a preferência de tema do sistema operacional
- 🎭 **Transições Suaves**: Animações elegantes na mudança de tema
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- ⚡ **Performance**: Implementação otimizada com CSS Custom Properties
- 🎯 **Acessibilidade**: Suporte completo a leitores de tela e navegação por teclado

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server ultrarrápido
- **Tailwind CSS** - Framework CSS utility-first
- **CSS Custom Properties** - Variáveis CSS nativas para temas
- **PostCSS** - Processamento de CSS

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/dark-light-mode-toggle.git
   cd dark-light-mode-toggle
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Button.tsx          # Componente de botão reutilizável
│   ├── Card.tsx            # Componente de card
│   ├── Navigation.tsx      # Barra de navegação
│   └── ThemeToggle.tsx     # Toggle do tema principal
├── hooks/
│   └── useTheme.ts         # Hook customizado para gerenciar temas
├── assets/
│   └── react.svg           # Assets da aplicação
├── App.tsx                 # Componente principal
├── main.tsx               # Ponto de entrada da aplicação
└── index.css              # Estilos globais e temas CSS
```

## 🎨 Como Funciona

### CSS Custom Properties

O sistema de temas utiliza CSS Custom Properties para definir cores dinâmicas:

```css
:root {
  --color-background: #ffffff;
  --color-foreground: #0f172a;
  --color-primary-500: #3b82f6;
  /* ... outras variáveis */
}

.dark {
  --color-background: #0f172a;
  --color-foreground: #f8fafc;
  --color-primary-500: #60a5fa;
  /* ... outras variáveis */
}
```

### Hook useTheme

O hook customizado gerencia o estado do tema e persistência:

```typescript
const { theme, toggleTheme } = useTheme();
```

### Funcionalidades do Hook:
- ✅ Inicialização baseada no localStorage
- ✅ Fallback para preferência do sistema
- ✅ Persistência automática
- ✅ Aplicação de classes CSS

## 🎯 Componentes Principais

### ThemeToggle
- Botão interativo com animações
- Ícones de sol e lua
- Indicador deslizante
- Estados visuais claros

### Navigation
- Menu responsivo
- Integração com sistema de temas
- Links de navegação adaptativos

### Card & Button
- Componentes que demonstram a aplicação do tema
- Variantes de estilo
- Transições suaves

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 🎨 Personalização

### Adicionando Novas Cores

1. **Defina as variáveis CSS em `src/index.css`:**
   ```css
   :root {
     --color-custom: #your-light-color;
   }
   
   .dark {
     --color-custom: #your-dark-color;
   }
   ```

2. **Configure no Tailwind (`tailwind.config.js`):**
   ```js
   theme: {
     extend: {
       colors: {
         custom: 'var(--color-custom)',
       }
     }
   }
   ```

### Adicionando Novos Temas

O hook `useTheme` pode ser facilmente expandido para suportar mais temas além de claro/escuro.

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 🔧 Configuração do Desenvolvimento

### Requisitos
- Node.js 18.0+ 
- npm 8.0+

### ESLint
O projeto inclui configuração ESLint otimizada para React + TypeScript.

### PostCSS
Configurado para processar Tailwind CSS e autoprefixer.

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - Biblioteca de UI
- [Heroicons](https://heroicons.com/) - Ícones SVG

---

<div align="center">
  <p>Feito com ❤️ e ☕</p>
  <p>⭐ Deixe uma estrela se este projeto foi útil!</p>
</div>
