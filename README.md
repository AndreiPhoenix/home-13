Тестирование
Установка зависимостей
bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
Пример теста для компонента избранного
jsx
// FavouritesPage.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import FavouritesPage from './FavouritesPage';

describe('FavouritesPage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('отображает сообщение, когда избранное пусто', () => {
    render(<FavouritesPage />);
    expect(screen.getByText(/В избранном пока ничего нет/i)).toBeInTheDocument();
  });

  test('отображает список избранных товаров', () => {
    const mockFavourites = [
      { id: 1, name: 'Товар 1', price: 100 },
      { id: 2, name: 'Товар 2', price: 200 }
    ];
    localStorage.setItem('favourites', JSON.stringify(mockFavourites));
    
    render(<FavouritesPage />);
    expect(screen.getByText('Товар 1')).toBeInTheDocument();
    expect(screen.getByText('Товар 2')).toBeInTheDocument();
  });

  test('удаляет товар из избранного', () => {
    const mockFavourites = [{ id: 1, name: 'Товар 1', price: 100 }];
    localStorage.setItem('favourites', JSON.stringify(mockFavourites));
    
    render(<FavouritesPage />);
    fireEvent.click(screen.getByText(/Удалить/i));
    expect(screen.queryByText('Товар 1')).not.toBeInTheDocument();
  });
});
Запуск тестов
bash
npm test
Запуск Lighthouse
bash
npm install -g lighthouse
lighthouse http://localhost:3000 --view

Развёртывание приложения
Создание production-сборки

bash
npm run build

Развертывание на Vercel
Установите Vercel CLI: npm install -g vercel

Войдите в аккаунт: vercel login

Разверните приложение: vercel

Следуйте инструкциям в терминале

Развертывание на GitHub Pages
Установите gh-pages: npm install gh-pages --save-dev

Добавьте в package.json:

json
"homepage": "https://username.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Выполните деплой: npm run deploy
