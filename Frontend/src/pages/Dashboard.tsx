import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState("Cajamarca Centro");
  const [destination, setDestination] = useState("Mercado San Antonio");
  const [showLegend, setShowLegend] = useState(false);

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-agrorutas-bg font-['Inter']">
      {/* Header */}
      <header className="w-full h-16 bg-agrorutas-dark-green shadow-lg">
        <div className="h-full flex items-center px-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-agrorutas-green rounded-lg flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.6 12.9H4.6V19.65C4.6 20.7 5.49 21.57 6.6 21.57H18.6C19.71 21.57 20.6 20.7 20.6 19.65V12.9H21.6C21.79 12.9 21.98 12.84 22.14 12.74C22.3 12.64 22.43 12.49 22.5 12.31C22.58 12.13 22.6 11.93 22.56 11.74C22.52 11.55 22.43 11.38 22.29 11.25L12.6 2.9L2.91 11.25C2.77 11.38 2.68 11.55 2.64 11.74C2.6 11.93 2.62 12.13 2.7 12.31C2.77 12.49 2.9 12.64 3.06 12.74C3.22 12.84 3.41 12.9 3.6 12.9Z"
                  fill="black"
                />
                <path
                  d="M12.6 7.17C10.95 7.17 9.6 8.47 9.6 10.05C9.6 11.63 10.95 12.93 12.6 12.93C14.25 12.93 15.6 11.63 15.6 10.05C15.6 8.47 14.25 7.17 12.6 7.17Z"
                  fill="black"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">
                AgroRutas Cajamarca
              </h1>
              <p className="text-[#A8C5A0] text-sm">
                Optimización de Distribución Rural
              </p>
            </div>
          </div>

          {/* Header Actions */}
          <div className="ml-auto flex items-center gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.12 2.04C5.74 2.04 2.18 5.6 2.18 9.98C2.18 14.36 5.74 17.92 10.12 17.92C14.5 17.92 18.06 14.36 18.06 9.98C18.06 5.6 14.5 2.04 10.12 2.04ZM8.53 13.95L4.56 9.98L5.68 8.86L8.53 11.7L14.56 5.67L15.68 6.8L8.53 13.95Z"
                fill="black"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.78 10.72C15.82 10.48 15.83 10.24 15.83 9.98C15.83 9.72 15.82 9.47 15.78 9.23L17.39 7.98C17.53 7.87 17.57 7.65 17.48 7.49L15.96 4.86C15.86 4.68 15.66 4.62 15.49 4.68L13.59 5.44C13.2 5.14 12.78 4.89 12.31 4.7L12.02 2.68C12 2.49 11.83 2.36 11.64 2.36H8.59C8.4 2.36 8.25 2.49 8.22 2.68L7.93 4.7C7.47 4.89 7.04 5.15 6.65 5.44L4.75 4.68C4.58 4.62 4.38 4.68 4.28 4.86L2.77 7.49C2.67 7.66 2.7 7.87 2.86 7.98L4.47 9.23C4.43 9.47 4.4 9.73 4.4 9.98C4.4 10.22 4.42 10.48 4.46 10.72L2.85 11.98C2.7 12.09 2.66 12.3 2.75 12.46L4.28 15.09C4.37 15.27 4.57 15.32 4.74 15.27L6.64 14.51C7.04 14.81 7.46 15.06 7.93 15.25L8.21 17.27C8.25 17.46 8.4 17.59 8.59 17.59H11.64C11.83 17.59 12 17.46 12.01 17.27L12.3 15.25C12.77 15.06 13.2 14.81 13.59 14.51L15.48 15.27C15.66 15.33 15.85 15.27 15.95 15.09L17.47 12.46C17.57 12.28 17.53 12.09 17.38 11.98L15.78 10.72ZM10.12 12.83C8.55 12.83 7.26 11.54 7.26 9.98C7.26 8.4 8.55 7.12 10.12 7.12C11.69 7.12 12.97 8.4 12.97 9.98C12.97 11.54 11.69 12.83 10.12 12.83Z"
                fill="black"
              />
            </svg>
            <button
              onClick={handleLogout}
              className="w-8 h-8 bg-agrorutas-green rounded-full flex items-center justify-center text-white text-sm font-medium"
            >
              JM
            </button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg flex flex-col">
          {/* Route Control Section */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-agrorutas-dark-green mb-6">
              Control de Rutas
            </h2>

            {/* Origin */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Punto de Origen
              </label>
              <div className="relative">
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full h-12 px-4 pl-10 pr-10 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none appearance-none cursor-pointer"
                >
                  <option value="Cajamarca Centro">Cajamarca Centro</option>
                  <option value="Plaza de Armas">Plaza de Armas</option>
                  <option value="Terminal Terrestre">Terminal Terrestre</option>
                </select>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agrorutas-green text-lg">
                  →
                </span>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 text-black pointer-events-none"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path d="M9 1H1L5 9L9 1Z" stroke="currentColor" />
                </svg>
              </div>
            </div>

            {/* Destination */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Punto de Destino
              </label>
              <div className="relative">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-12 px-4 pl-10 pr-10 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none appearance-none cursor-pointer"
                >
                  <option value="Mercado San Antonio">
                    Mercado San Antonio
                  </option>
                  <option value="Mercado Central">Mercado Central</option>
                  <option value="Mercado Modelo">Mercado Modelo</option>
                </select>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-agrorutas-green text-lg">
                  ◉
                </span>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 text-black pointer-events-none"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path d="M9 1H1L5 9L9 1Z" stroke="currentColor" />
                </svg>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 h-18 bg-agrorutas-green text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-lg text-center py-4">
                Calcular
                <br />
                Ruta
              </button>
              <button className="flex-1 h-18 bg-agrorutas-brown text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                Comparar
              </button>
            </div>

            {/* Legend Toggle */}
            <button
              onClick={() => setShowLegend(!showLegend)}
              className="w-full h-11 bg-gray-50 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between px-4"
            >
              <span>Leyenda del Mapa</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  showLegend ? "rotate-180" : ""
                }`}
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M5.289 7.139L8.622 10.472L11.956 7.139H5.289Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          {/* Legend Content */}
          {showLegend && (
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Leyenda del Mapa
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-agrorutas-green rounded-full"></div>
                  <span>Puntos de distribución</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-agrorutas-red rounded-full"></div>
                  <span>Puntos problemáticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-agrorutas-blue rounded-full"></div>
                  <span>Paradas intermedias</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 relative">
          {/* Map Area */}
          <div className="w-full h-full bg-agrorutas-light-green relative overflow-hidden">
            {/* Map Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-agrorutas-light-green to-[#F0F9F0]"></div>

            {/* Route Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 811 811"
              preserveAspectRatio="none"
            >
              <path
                d="M162.622 243.472C270.622 216.472 378.622 229.972 486.622 283.972C594.622 337.972 648.622 378.472 648.622 405.472"
                stroke="#8B7355"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                fill="none"
              />
              <path
                d="M122.122 405.472C230.122 378.472 338.122 391.972 446.122 445.972C554.122 499.972 635.122 526.972 689.122 526.972"
                stroke="#8B7355"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                fill="none"
              />
              <path
                d="M203.122 486.472C311.122 459.472 419.122 472.972 527.122 526.972C635.122 580.972 702.622 607.972 729.622 607.972"
                stroke="#8B7355"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                fill="none"
              />
            </svg>

            {/* Location Points */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-agrorutas-green rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-agrorutas-red rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-agrorutas-green rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-1/4 right-1/6 w-4 h-4 bg-agrorutas-blue rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute top-1/2 right-1/5 w-4 h-4 bg-agrorutas-green rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-1/2 left-1/5 w-4 h-4 bg-agrorutas-red rounded-full border-2 border-white shadow-lg"></div>

            {/* Location Badge */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.7C6.04 1.7 3.96 3.66 3.96 6.09C3.96 9.39 8 14.25 8 14.25C8 14.25 13.29 9.39 13.29 6.09C13.29 3.66 11.2 1.7 8 1.7ZM8 7.66C7.08 7.66 6.96 6.96 6.96 6.09C6.96 5.23 7.7 4.52 8 4.52C9.54 4.52 10.29 5.23 10.29 6.09C10.29 6.96 9.54 7.66 8 7.66Z"
                  fill="black"
                />
              </svg>
              <span className="text-sm font-medium text-gray-700">
                Cajamarca, Perú
              </span>
            </div>
          </div>

          {/* Zone Information Card */}
          <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-44">
            <h3 className="text-sm font-semibold text-agrorutas-dark-green mb-3">
              Información de Zona
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Región:</span>
                <span className="text-gray-700">Cajamarca</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Altitud:</span>
                <span className="text-gray-700">2,750 msnm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Clima:</span>
                <span className="text-gray-700">Templado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Temporada:</span>
                <span className="text-gray-700">Seca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
