import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, User, Phone, Mail, Lock } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword && formData.password.length >= 6) {
      navigate('/profile-setup');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col px-8 pt-8 pb-24">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/login" className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center mb-12">Crie sua conta</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">Nome</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-[60px] px-4 pr-12 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
                required
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Telefone</label>
            <div className="relative">
              <input
                type="tel"
                placeholder="(**) 00000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-[60px] px-4 pr-12 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
                required
              />
              <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">E-mail</label>
            <div className="relative">
              <input
                type="email"
                placeholder="voce@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-[60px] px-4 pr-12 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
                required
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mín. 6 caracteres"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full h-[60px] px-4 pr-12 text-lg border-2 border-cony-green rounded-lg focus:border-cony-green focus:outline-none"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25"
              >
                <Lock size={20} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Confirmar senha</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Repita a senha"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full h-[60px] px-4 pr-12 text-lg border-2 border-cony-green rounded-lg focus:border-cony-green focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black/25"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[60px] bg-cony-green text-white text-xl font-bold rounded-full hover:bg-cony-green/90 transition-colors mt-8"
          >
            CADASTRAR
          </button>
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
