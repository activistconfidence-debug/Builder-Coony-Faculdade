import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Bell, MapPin, Calendar, Heart } from 'lucide-react';

export default function EventDetail() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);

  const event = {
    title: 'Corrida Matinal',
    description: 'Uma corrida leve e comunitária pelas ruas históricas do Recife antigo. Ideal para quem busca saúde, conexão e paisagens incríveis',
    location: 'Marco Zero - PE',
    date: '26/11/2025',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=480&fit=crop',
    mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=360&fit=crop',
  };

  const categories = ['Todos', 'Corrida', 'Ciclismo', 'Funcional'];
  const distances = ['Livre', 'até 2km', 'até 5km', 'até 10km'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedDistance, setSelectedDistance] = useState('até 2km');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/home">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="relative">
            <Bell className="w-6 h-6 text-cony-green" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-cony-green rounded-full"></span>
          </div>
        </div>
      </div>

      <div className="px-6 pt-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar eventos ou atividades..."
            className="w-full h-[60px] pl-4 pr-12 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
          />
          <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cony-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10.4616 0C4.70558 0 0 4.70557 0 10.4616C0 16.2176 4.70558 20.9232 10.4616 20.9232C12.6768 20.9232 14.7358 20.2261 16.4315 19.0422L20.8485 23.4591C21.5697 24.1803 22.7379 24.1803 23.4591 23.4591C24.1803 22.7379 24.1803 21.5685 23.4591 20.8485L19.0422 16.4316C20.2273 14.7357 20.9232 12.678 20.9232 10.4629C20.9232 4.70689 16.2176 0.00132312 10.4615 0.00132312L10.4616 0ZM10.4616 3.69233C14.2226 3.69233 17.2309 6.70075 17.2309 10.4616C17.2309 14.2225 14.2225 17.2309 10.4616 17.2309C6.70077 17.2309 3.69234 14.2225 3.69234 10.4616C3.69234 6.70075 6.70077 3.69233 10.4616 3.69233Z" />
          </svg>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <p className="text-sm font-bold text-cony-green mb-3">Categorias:</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-b from-cony-yellow to-cony-green-light text-black font-bold'
                    : 'bg-white text-black/50 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Distance Filters */}
        <div className="mb-6">
          <p className="text-sm font-bold text-cony-green mb-3">Distância:</p>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {distances.map((dist) => (
              <button
                key={dist}
                onClick={() => setSelectedDistance(dist)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-sm transition-all ${
                  selectedDistance === dist
                    ? 'bg-gradient-to-b from-cony-yellow to-cony-green-light text-black font-bold'
                    : 'bg-white text-black/50 border border-gray-200'
                }`}
              >
                {dist}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="px-6 pb-24">
        <div className="bg-white rounded-[30px] shadow-sm border border-black/5 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-[240px] object-cover"
          />

          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">{event.title}</h1>

            <p className="text-black/70 mb-6">{event.description}</p>

            <div className="flex items-center justify-start gap-8 mb-6 text-sm font-medium">
              <div className="flex items-center gap-2 text-cony-green">
                <MapPin size={16} />
                <span className="text-black">{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-cony-green">
                <Calendar size={16} />
                <span className="text-black">{event.date}</span>
              </div>
            </div>

            <div className="flex gap-2 mb-8">
              <button className="flex-1 h-[42px] bg-cony-green text-white text-lg font-bold rounded-3xl hover:bg-cony-green/90 transition-colors">
                Participar
              </button>
              <button
                onClick={() => setLiked(!liked)}
                className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-colors ${
                  liked
                    ? 'bg-cony-green border-2 border-cony-green'
                    : 'bg-white border-2 border-cony-green'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-white text-white' : 'text-cony-green'}`} />
              </button>
            </div>

            {/* Map Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-cony-green" />
                <h2 className="text-xl font-semibold">Percurso</h2>
              </div>
              <img
                src={event.mapImage}
                alt="Mapa do percurso"
                className="w-full h-[180px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
