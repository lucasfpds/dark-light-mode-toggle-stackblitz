import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Button from './components/Button';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground theme-transition">
      <Navigation />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dark/Light Mode Toggle
          </h1>
          <p className="text-xl text-foreground/70 mb-8">
            Demonstração de alternância de tema persistente usando CSS Custom Properties
          </p>
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-sm font-medium text-foreground">
              Tema atual: <span className="capitalize">{theme}</span>
            </span>
            <ThemeToggle />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            title="Recursos do Tema"
            description="Alternância suave entre temas claro e escuro com persistência no localStorage."
          >
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-foreground/80">CSS Custom Properties</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-foreground/80">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                <span className="text-sm text-foreground/80">Persistência Local</span>
              </div>
            </div>
          </Card>

          <Card
            title="Componentes Reativos"
            description="Todos os componentes se adaptam automaticamente ao tema selecionado."
          >
            <div className="space-y-3">
              <Button variant="primary">Botão Primário</Button>
              <Button variant="secondary">Botão Secundário</Button>
            </div>
          </Card>

          <Card
            title="Transições Suaves"
            description="Animações CSS garantem uma experiência fluida na mudança de temas."
          >
            <div className="space-y-2">
              <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-500 rounded-full w-3/4 transition-all duration-1000"></div>
              </div>
              <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-400 rounded-full w-1/2 transition-all duration-1000"></div>
              </div>
              <div className="h-2 bg-primary-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary-600 rounded-full w-2/3 transition-all duration-1000"></div>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-accent rounded-lg p-8 border border-border theme-transition">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Como Funciona
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-foreground/80 mb-4">
              Este projeto demonstra como implementar um sistema de temas usando:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <strong>CSS Custom Properties:</strong> Definindo variáveis CSS que mudam
                baseadas na classe do tema aplicada ao elemento raiz.
              </li>
              <li>
                <strong>React Hook personalizado:</strong> Gerenciando o estado do tema
                e a persistência no localStorage.
              </li>
              <li>
                <strong>Tailwind CSS:</strong> Utilizando classes utilitárias que referenciam
                as CSS Custom Properties.
              </li>
              <li>
                <strong>Transições CSS:</strong> Aplicando animações suaves para mudanças
                de cor e propriedades visuais.
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-foreground/60">
            Criado com React, Vite, Tailwind CSS e CSS Custom Properties
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
