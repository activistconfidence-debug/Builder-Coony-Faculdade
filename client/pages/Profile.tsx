import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Plus, Edit2 } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

const sports = [
  { icon: '👟', name: 'Corrida', selected: true },
  { icon: '🚴', name: 'Ciclismo', selected: true },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <Link to="/home">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      <div className="px-6">
        <h1 className="text-2xl font-bold text-center mb-8">Personalizar Perfil</h1>

        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-cony-green">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-cony-green rounded-full flex items-center justify-center text-white shadow-lg">
              <Edit2 size={16} />
            </button>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">Nome</label>
            <input
              type="text"
              placeholder="Seu nome"
              defaultValue=""
              className="w-full h-[60px] px-4 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Telefone</label>
            <input
              type="tel"
              placeholder="(**) 00000-0000"
              defaultValue=""
              className="w-full h-[60px] px-4 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Localização</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Cidade"
                className="flex-1 h-[60px] px-4 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
              />
              <button className="w-[60px] h-[60px] bg-cony-green rounded-lg flex items-center justify-center text-white">
                <MapPin size={24} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Modalidades</label>
            <div className="flex gap-3">
              {sports.map((sport, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-2xl ${
                    sport.selected
                      ? 'bg-cony-yellow border-cony-green'
                      : 'bg-white border-black/25'
                  }`}
                >
                  {sport.icon}
                </button>
              ))}
              <button className="w-12 h-12 rounded-full bg-cony-green flex items-center justify-center text-white">
                <Plus size={24} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Bio</label>
            <textarea
              placeholder="Estou retomando aos poucos, a minha rotina de atividades físicas..."
              rows={4}
              className="w-full px-4 py-3 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none resize-none"
            />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
