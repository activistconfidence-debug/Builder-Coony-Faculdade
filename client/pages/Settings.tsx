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
        <img
          src="/coony.png"
          alt="Coony"
          className="w-[136px] h-auto select-none"
          draggable={false}
        />
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
