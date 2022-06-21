import React from 'react';

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper indigo lighten-2">
        <a href="/" class="brand-logo">Curso React</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/">Autores</a></li>
          <li><a href="/">Livros</a></li>
          <li><a href="/">Sobre</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;