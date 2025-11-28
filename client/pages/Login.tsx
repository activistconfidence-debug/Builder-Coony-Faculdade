import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in real app, authenticate here
    if (email && password) {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-start px-8 pt-12">
        {/* Language Selector */}
        <div className="text-center text-sm text-gray-500 mb-8">
          Português (Brasil)
        </div>

        {/* Logo */}
        <div className="mb-12">
          <svg width="227" height="50" viewBox="0 0 227 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M184.415 22.9209C181.981 21.6362 180.071 19.8614 178.685 17.5963C177.299 15.3313 176.606 12.407 176.606 8.82353V4.29344C176.606 2.42732 178.12 0.912781 179.986 0.912781H189.858C191.724 0.912781 193.239 2.42732 193.239 4.29344V8.82353C193.239 11.1224 194.05 13.0832 195.673 14.7059C197.295 16.3286 199.253 17.14 201.552 17.14C203.85 17.14 205.875 16.2677 207.437 14.7059C209.06 13.0832 209.871 11.1224 209.871 8.82353V4.29344C209.871 2.42732 211.386 0.912781 213.252 0.912781H223.124C224.99 0.912781 226.504 2.42732 226.504 4.29344V8.82353C226.504 12.407 225.811 15.3313 224.425 17.5963C223.039 19.8614 221.129 21.6362 218.695 22.9209C207.853 28.0865 195.257 28.0865 184.415 22.9209Z" fill="black"/>
            <path d="M193.239 45.6051V21.1968C193.239 19.3306 194.753 17.8161 196.619 17.8161H206.491C208.357 17.8161 209.871 19.3306 209.871 21.1968V45.6051C209.871 47.4713 208.357 48.9858 206.491 48.9858H196.619C194.753 48.9858 193.239 47.4713 193.239 45.6051Z" fill="black"/>
            <path d="M69.9797 49.8817C63.3096 49.8817 57.0419 47.2819 52.3292 42.5592C47.6166 37.8364 45.0338 31.5619 45.0473 24.8918C45.0608 18.5058 47.5185 12.4206 51.9607 7.76201C56.4097 3.0967 62.3732 0.358364 68.7559 0.0507241C73.3062 -0.165638 77.8329 0.868841 81.8052 3.00542C85.4225 1.04464 89.4556 0.0202942 93.6443 0.0202942C100.314 0.0202942 106.582 2.62002 111.295 7.34281C116.007 12.0656 118.59 18.3401 118.577 25.0101C118.563 31.3962 116.105 37.4814 111.663 42.14C107.214 46.8053 101.251 49.5436 94.8681 49.8512C90.3177 50.071 85.791 49.0331 81.8187 46.8965C78.2014 48.8573 74.1683 49.8817 69.9797 49.8817Z" fill="#CDFF21"/>
            <path d="M69.9797 49.8817C63.3096 49.8817 57.0419 47.2819 52.3292 42.5592C47.6166 37.8364 45.0338 31.5619 45.0473 24.8918C45.0608 18.5058 47.5185 12.4206 51.9607 7.76201C56.4097 3.0967 62.3732 0.358364 68.7559 0.0507241C73.3062 -0.165638 77.8329 0.868841 81.8052 3.00542C85.4225 1.04464 89.4556 0.0202942 93.6443 0.0202942C100.314 0.0202942 106.582 2.62002 111.295 7.34281C116.007 12.0656 118.59 18.3401 118.577 25.0101C118.563 31.3962 116.105 37.4814 111.663 42.14C107.214 46.8053 101.251 49.5436 94.8681 49.8512C90.3177 50.071 85.791 49.0331 81.8187 46.8965C78.2014 48.8573 74.1683 49.8817 69.9797 49.8817Z" fill="url(#paint0_linear)"/>
            <path d="M24.9493 16.7343C22.6504 16.7343 20.6897 17.5457 19.0669 19.1684C17.5051 20.7302 16.6329 22.8431 16.6329 25.0507C16.6329 27.3496 17.4442 29.3104 19.0669 30.9331C20.6897 32.5558 22.6504 33.3671 24.9493 33.3671H38.1001C39.9662 33.3671 41.4807 34.8817 41.4807 36.7478V46.6193C41.4807 48.4855 39.9662 50 38.1001 50H24.9493C21.501 50 18.2556 49.3408 15.213 48.0223C12.1704 46.7038 9.53346 44.929 7.30222 42.6978C5.07098 40.4665 3.29614 37.8296 1.97768 34.787C0.659221 31.7444 0 28.499 0 25.0507C0 21.6024 0.659221 18.357 1.97768 15.3144C3.29614 12.2718 5.07098 9.63491 7.30222 7.40367C9.53346 5.17243 12.1704 3.39759 15.213 2.07913C18.2556 0.760671 21.501 0.10144 24.9493 0.10144H38.1001C39.9662 0.10144 41.4807 1.61598 41.4807 3.4821V13.3536C41.4807 15.2198 39.9662 16.7343 38.1001 16.7343H24.9493Z" fill="black"/>
            <defs>
              <linearGradient id="paint0_linear" x1="81.812" y1="49.8817" x2="81.812" y2="0.0169148" gradientUnits="userSpaceOnUse">
                <stop offset="0.33" stopColor="#00B546"/>
                <stop offset="1" stopColor="#00B546" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
          <div>
            <input
              type="text"
              placeholder="Email ou número de telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[60px] px-4 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[60px] px-4 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25"
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-[60px] bg-cony-green text-white text-xl font-bold rounded-full hover:bg-cony-green/90 transition-colors"
          >
            ENTRAR
          </button>

          <Link
            to="/register"
            className="block w-full h-[60px] border-2 border-cony-green text-cony-green text-xl font-bold rounded-full flex items-center justify-center hover:bg-cony-green/5 transition-colors"
          >
            CADASTRAR
          </Link>

          <div className="text-center">
            <button type="button" className="text-sm text-black/50 hover:text-black/70">
              Redefinir senha
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-black/50 py-4 space-x-4">
        <span>Sobre</span>
        <span>Ajuda</span>
        <span>Política</span>
        <span>Privacidade</span>
      </div>
    </div>
  );
}
