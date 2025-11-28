import { Home, MessageCircle, User, Activity } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: Home, label: "Início" },
    { path: "/activities", icon: Activity, label: "Atividades" },
    { path: "/chat", icon: MessageCircle, label: "Chat" },
    { path: "/profile", icon: User, label: "Perfil" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full relative ${
                isActive ? "text-black" : "text-gray-500"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-12 bg-cony-yellow/30 rounded-b-xl" />
              )}
              <Icon
                className={`w-6 h-6 relative z-10 ${isActive ? "fill-black" : ""}`}
              />
            </Link>
          );
        })}
      </div>
      <div className="h-5 bg-gradient-to-b from-transparent to-black/25" />
      <div className="h-1 w-32 mx-auto bg-cony-green rounded-full mb-2" />
    </div>
  );
}
