
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Assistant from './pages/Assistant';
import Login from './pages/Login';
import Register from './pages/Register';
import { articles } from './data/articles';
import Article from './pages/Article';

export default function App() {
  const [page, setPage] = useState('home');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const openArticle = (id) => {
    const found = articles.find((a) => a.id === id);
    setArticle(found);
    setPage('article');
  };

  const isAuthPage = page === 'login' || page === 'register';

  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1f] text-white">
      {!isAuthPage && <Header activePage={page} onNavigate={setPage} />}

      <main className="flex-1">
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'about' && <About onNavigate={setPage} />}
        {page === 'community' && <Community onNavigate={setPage} onOpenArticle={openArticle} />}
        {page === 'article' && <Article article={article} onBack={() => setPage('community')} />}
        {page === 'assistant' && <Assistant onNavigate={setPage} />}
        {page === 'login' && <Login onNavigate={setPage} />}
        {page === 'register' && <Register onNavigate={setPage} />}
      </main>

      {!isAuthPage && <Footer onNavigate={setPage} />}
    </div>
  );
}

