import React from 'react';

const Navigation: React.FC = () => {
  const navItems = ['Home', 'Sobre', 'Projetos', 'Contato'];

  return (
    <nav className="bg-card border-b border-border theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">Logo</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-primary-500 px-3 py-2 text-sm font-medium theme-transition"
              >
                {item}
              </a>
            ))}
          </div>          
          <div className="md:hidden flex items-center">
            <button className="text-foreground hover:text-primary-500 theme-transition">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
