import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in real app, authenticate here
    if (email && password) {
      navigate("/home");
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
          <img
            src="/coony.png"
            alt="Coony"
            className="w-[227px] h-auto select-none"
            draggable={false}
          />
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
              type={showPassword ? "text" : "password"}
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
            <button
              type="button"
              className="text-sm text-black/50 hover:text-black/70"
            >
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
