import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bell, MapPin, Calendar, Heart } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const events = [
  {
    id: 1,
    title: "1° Bike Fest Recife",
    description:
      "Uma manhã para pedalar pelas ruas da cidade praticando esporte e lazer...",
    location: "Boa Viagem - PE",
    date: "14/09/2025",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=240&fit=crop",
    liked: true,
  },
  {
    id: 2,
    title: "Circuito SESC 2026",
    description:
      "Uma manhã para pedalar pelas ruas da cidade praticando esporte e lazer...",
    location: "Marco Zero - PE",
    date: "26/11/2025",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=240&fit=crop",
    liked: false,
  },
];

const categories = ["Todos", "Corrida", "Ciclismo", "Funcional"];
const distances = ["Livre", "até 2km", "até 5km", "até 10km"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedDistance, setSelectedDistance] = useState("até 2km");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="px-6 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <div className="relative">
            <Bell className="w-6 h-6 text-cony-green" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-cony-green rounded-full"></span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-1">Olá, Maria Eduarda</h1>
        <p className="text-sm text-gray-500 mb-6">
          Confira os eventos e atividades próximas
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar eventos ou atividades..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[60px] pl-4 pr-12 text-lg border-2 border-black/25 rounded-lg focus:border-cony-green focus:outline-none"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cony-green"
            size={24}
          />
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
                    ? "bg-gradient-to-b from-cony-yellow to-cony-green-light text-black font-bold"
                    : "bg-white text-black/50 border border-gray-200"
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
                    ? "bg-gradient-to-b from-cony-yellow to-cony-green-light text-black font-bold"
                    : "bg-white text-black/50 border border-gray-200"
                }`}
              >
                {dist}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="px-6 space-y-6 pb-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-[30px] shadow-sm border border-black/5 p-4 relative"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              {event.title}
            </h3>

            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[180px] object-cover rounded-lg mb-4"
            />

            <p className="text-center text-black/50 text-sm mb-4 px-4">
              {event.description}
            </p>

            <div className="flex items-center justify-center gap-8 mb-4 text-sm font-medium">
              <div className="flex items-center gap-2 text-cony-green">
                <MapPin size={16} />
                <span className="text-black">{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-cony-green">
                <Calendar size={16} />
                <span className="text-black">{event.date}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                to={`/event/${event.id}`}
                className="flex-1 h-[42px] bg-cony-green text-white text-lg font-bold rounded-3xl flex items-center justify-center hover:bg-cony-green/90 transition-colors"
              >
                Ver detalhes
              </Link>
              <button
                className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-colors ${
                  event.liked
                    ? "bg-cony-green border-2 border-cony-green"
                    : "bg-white border-2 border-cony-green"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${event.liked ? "fill-white text-white" : "text-cony-green"}`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
