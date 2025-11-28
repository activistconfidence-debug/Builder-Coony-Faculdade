import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Plus, LogOut } from "lucide-react";
import BottomNav from "@/components/BottomNav";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-black/75 pb-24">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <Link to="/home" className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-12">
        <svg width="136" height="30" viewBox="0 0 136 30" fill="none">
          <path
            d="M110.649 13.7525C109.189 12.9817 108.042 11.9168 107.211 10.5578C106.379 9.19878 105.963 7.44422 105.963 5.29412V2.57607C105.963 1.45639 106.872 0.547668 107.992 0.547668H113.915C115.034 0.547668 115.943 1.45639 115.943 2.57607V5.29412C115.943 6.67343 116.43 7.8499 117.404 8.82353C118.377 9.79716 119.552 10.284 120.931 10.284C122.31 10.284 123.525 9.76065 124.462 8.82353C125.436 7.8499 125.923 6.67343 125.923 5.29412V2.57607C125.923 1.45639 126.832 0.547668 127.951 0.547668H133.874C134.994 0.547668 135.903 1.45639 135.903 2.57607V5.29412C135.903 7.44422 135.487 9.19878 134.655 10.5578C133.823 11.9168 132.677 12.9817 131.217 13.7525C124.712 16.8519 117.154 16.8519 110.649 13.7525Z"
            fill="white"
          />
          <path
            d="M41.9878 29.929C37.9858 29.929 34.2251 28.3692 31.3975 25.5355C28.5699 22.7018 27.0202 18.9371 27.0284 14.9351C27.0365 11.1035 28.5111 7.45234 31.1764 4.65721C33.8458 1.85802 37.4239 0.215019 41.2535 0.0304344C43.9837 -0.099383 46.6997 0.521304 49.0831 1.80325C51.2535 0.626781 53.6734 0.0121765 56.1866 0.0121765C60.1886 0.0121765 63.9492 1.57201 66.7768 4.40568C69.6044 7.23936 71.1541 11.0041 71.146 15.0061C71.1379 18.8377 69.6632 22.4888 66.9979 25.284C64.3285 28.0832 60.7504 29.7262 56.9208 29.9107C54.1906 30.0426 51.4746 29.4199 49.0912 28.1379C46.9208 29.3144 44.501 29.929 41.9878 29.929Z"
            fill="#B9F825"
          />
          <path
            d="M14.9696 10.0406C13.5903 10.0406 12.4138 10.5274 11.4402 11.501C10.503 12.4381 9.97971 13.7059 9.97971 15.0304C9.97971 16.4097 10.4665 17.5862 11.4402 18.5598C12.4138 19.5335 13.5903 20.0203 14.9696 20.0203H22.86C23.9797 20.0203 24.8884 20.929 24.8884 22.0487V27.9716C24.8884 29.0913 23.9797 30 22.86 30H14.9696C12.9006 30 10.9533 29.6045 9.12779 28.8134C7.30223 28.0223 5.72007 26.9574 4.38133 25.6187C3.04259 24.2799 1.97768 22.6978 1.18661 20.8722C0.395532 19.0467 0 17.0994 0 15.0304C0 12.9615 0.395532 11.0142 1.18661 9.18865C1.97768 7.3631 3.04259 5.78095 4.38133 4.44221C5.72007 3.10346 7.30223 2.03856 9.12779 1.24748C10.9533 0.456406 12.9006 0.0608673 14.9696 0.0608673H22.86C23.9797 0.0608673 24.8884 0.969589 24.8884 2.08926V8.01218C24.8884 9.13186 23.9797 10.0406 22.86 10.0406H14.9696Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Settings Card */}
      <div className="mx-6 bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* User Header */}
        <div className="bg-gradient-to-r from-cony-green-light to-cony-yellow p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="font-bold text-lg">Maria Eduarda</div>
        </div>

        {/* Settings List */}
        <div className="p-6">
          <p className="text-sm text-gray-400 mb-4">Mais informações</p>

          <div className="space-y-4">
            <Link
              to="/profile"
              className="flex items-center justify-between py-3"
            >
              <span className="text-lg">Editar perfil</span>
              <ChevronRight className="text-gray-400" />
            </Link>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Trocar senha</span>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Eventos favoritos</span>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Criar evento</span>
              <Plus className="text-cony-green" />
            </button>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Meus eventos</span>
              <ChevronRight className="text-gray-400" />
            </button>

            <div className="flex items-center justify-between py-3">
              <span className="text-lg">Notificações</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-7 rounded-full transition-colors ${
                  notifications ? "bg-cony-green-light" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    notifications ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-3">
              <span className="text-lg">Modo noturno</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-7 rounded-full transition-colors ${
                  darkMode ? "bg-cony-green-light" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform ${
                    darkMode ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          <p className="text-sm text-gray-400 mb-4">Mais informações</p>

          <div className="space-y-4">
            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Sobre nós</span>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Central de ajuda</span>
              <ChevronRight className="text-gray-400" />
            </button>

            <button className="flex items-center justify-between py-3 w-full text-left">
              <span className="text-lg">Termos e condições</span>
              <ChevronRight className="text-gray-400" />
            </button>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-cony-green font-bold text-lg py-4"
          >
            <LogOut className="w-5 h-5" />
            Sair
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
