import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Community from './pages/Community';
import Assistant from './pages/Assistant';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser, logout } from './auth';

export default function App() {
  const [page, setPage] = useState('home');
  const [articleId, setArticleId] = useState(null);
  const [user, setUser] = useState(getCurrentUser());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleAuth = () => setUser(getCurrentUser());

  const handleLogout = () => {
    logout();
    setUser(null);
    setPage('home');
  };

  const openArticle = (id) => {
    setArticleId(id);
    setPage('article');
  };

  const renderPage = () => {
    switch (page) {
      case 'about':
        return <About onNavigate={setPage} />;
      case 'article':
        return <Article articleId={articleId} onNavigate={setPage} />;
      case 'community':
        return <Community onOpenArticle={openArticle} onNavigate={setPage} />;
      case 'assistant':
        return <Assistant />;
      case 'contacts':
        return <Contacts />;
      case 'login':
        return <Login onNavigate={setPage} onAuth={handleAuth} />;
      case 'register':
        return <Register onNavigate={setPage} onAuth={handleAuth} />;
      default:
        return <Home onNavigate={setPage} onOpenArticle={openArticle} />;
    }
  };

  /* На страницах входа и регистрации шапка и подвал не нужны —
     у форм своя полноэкранная вёрстка */
  const isAuthPage = page === 'login' || page === 'register';

  return (
    <div className="min-h-screen bg-[#0b0d13] text-white">
      {!isAuthPage && (
        <Header page={page} onNavigate={setPage} user={user} onLogout={handleLogout} />
      )}

      <main>{renderPage()}</main>

      {!isAuthPage && <Footer onNavigate={setPage} />}
    </div>
  );
}
