import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Assistant from './pages/Assistant';
import Login from './pages/Login';
import Register from './pages/Register';
import Article from './pages/Article';

export default function App() {
  const [page, setPage] = useState('home');
  const [articleId, setArticleId] = useState(null);

  const openArticle = (id) => {
    setArticleId(id);
    setPage('article');
  };

  const isAuthPage = page === 'login' || page === 'register';

  return (
    <div className="flex min-h-screen flex-col bg-[#1a1a1f] text-white">
      {!isAuthPage && <Header activePage={page} onNavigate={setPage} />}

      <main className="flex-1">
        {page === 'home' && <Home onNavigate={setPage} onOpenArticle={openArticle} />}
        {page === 'about' && <About onNavigate={setPage} />}
        {page === 'community' && <Community onOpenArticle={openArticle} />}
        {page === 'article' && <Article id={articleId} onNavigate={setPage} />}
        {page === 'assistant' && <Assistant onNavigate={setPage} />}
        {page === 'login' && <Login onNavigate={setPage} />}
        {page === 'register' && <Register onNavigate={setPage} />}
      </main>

      {!isAuthPage && <Footer onNavigate={setPage} />}
    </div>
  );
}
