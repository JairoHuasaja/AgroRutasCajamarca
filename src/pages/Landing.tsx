import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen bg-agrorutas-bg font-['Inter']">
      {/* Header */}
      <header className="w-full h-16 bg-agrorutas-dark-green shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-white text-sm hover:text-gray-200"
            >
              Inicio
            </a>
            <a
              href="#caracteristicas"
              className="text-white text-sm hover:text-gray-200"
            >
              Características
            </a>
            <a
              href="#soluciones"
              className="text-white text-sm hover:text-gray-200"
            >
              Soluciones
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
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
              onClick={() => navigate("/login")}
              className="px-4 py-2 border border-agrorutas-green bg-agrorutas-green text-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="px-4 py-2 bg-agrorutas-green text-white text-sm font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Crear Cuenta
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold text-agrorutas-dark-green leading-tight mb-6">
              Revoluciona la Distribución Rural en Cajamarca
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Optimiza tus rutas de distribución con tecnología avanzada
              diseñada específicamente para las condiciones geográficas y
              climáticas de la región de Cajamarca.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={() => navigate("/signup")}
                className="px-8 py-4 bg-agrorutas-green text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
              >
                Comenzar Ahora
              </button>
              <button className="px-8 py-4 bg-agrorutas-brown text-white text-lg font-semibold rounded-lg hover:bg-opacity-90 transition-colors shadow-lg">
                Ver Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-agrorutas-green mb-1">
                  35%
                </div>
                <div className="text-sm text-gray-500">Reducción de Costos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agrorutas-green mb-1">
                  50+
                </div>
                <div className="text-sm text-gray-500">Rutas Optimizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-agrorutas-green mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-500">Monitoreo Activo</div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="w-full h-80 bg-agrorutas-light-green rounded-2xl shadow-lg p-8 relative overflow-hidden">
              {/* Map Background */}
              <div className="w-full h-full bg-gradient-to-r from-agrorutas-light-green to-[#F0F9F0] rounded-xl relative">
                {/* Route Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 300"
                >
                  <path
                    d="M50 150 C120 120 180 130 250 120 C320 135 350 140 350 140"
                    stroke="#8B7355"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <path
                    d="M50 180 C120 150 180 160 250 150 C320 165 350 170 350 170"
                    stroke="#8B7355"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </svg>

                {/* Location Points */}
                <div className="absolute top-12 left-20 w-4 h-4 bg-agrorutas-green rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute top-8 right-16 w-4 h-4 bg-agrorutas-red rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-16 left-32 w-4 h-4 bg-agrorutas-blue rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 bg-agrorutas-green rounded-full border-2 border-white shadow-lg"></div>
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 left-8 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
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

            {/* Info Card */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-xl max-w-44">
              <h3 className="text-sm font-semibold text-agrorutas-dark-green mb-3">
                Información de Zona
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-gray-500">Región:</span>{" "}
                  <span className="text-gray-700">Cajamarca</span>
                </div>
                <div>
                  <span className="text-gray-500">Altitud:</span>{" "}
                  <span className="text-gray-700">2,750 msnm</span>
                </div>
                <div>
                  <span className="text-gray-500">Clima:</span>{" "}
                  <span className="text-gray-700">Templado</span>
                </div>
                <div>
                  <span className="text-gray-500">Temporada:</span>{" "}
                  <span className="text-gray-700">Seca</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="caracteristicas" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agrorutas-dark-green mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre las herramientas que transformarán tu operación de
              distribución rural
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-200 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-agrorutas-green rounded-lg flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.8 14.4L13.2 16.8L18 12M25.2 14.4C25.2 15.8183 24.9206 17.2227 24.3779 18.533C23.8351 19.8433 23.0396 21.0339 22.0367 22.0368C21.0339 23.0396 19.8433 23.8351 18.533 24.3779C17.2226 24.9207 15.8183 25.2 14.4 25.2C12.9817 25.2 11.5773 24.9207 10.267 24.3779C8.95668 23.8351 7.7661 23.0396 6.76322 22.0368C5.76035 21.0339 4.96483 19.8433 4.42208 18.533C3.87933 17.2227 3.59998 15.8183 3.59998 14.4C3.59998 11.5357 4.73783 8.78864 6.76322 6.76325C8.78862 4.73785 11.5356 3.6 14.4 3.6C17.2643 3.6 20.0113 4.73785 22.0367 6.76325C24.0621 8.78864 25.2 11.5357 25.2 14.4Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-4">
                Optimización Inteligente
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Algoritmos avanzados que analizan múltiples variables para
                encontrar las rutas más eficientes, considerando distancia,
                tiempo, carga y condiciones del terreno.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-gray-200 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-agrorutas-green rounded-lg flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3.6 4.8C3.6 4.48174 3.7264 4.17651 3.95145 3.95147C4.17649 3.72643 4.48172 3.6 4.8 3.6H19.2C19.5183 3.6 19.8235 3.72643 20.0485 3.95147C20.2736 4.17651 20.4 4.48174 20.4 4.8V7.2C20.4 7.51826 20.2736 7.82348 20.0485 8.04853C19.8235 8.27357 19.5183 8.4 19.2 8.4H4.8C4.48172 8.4 4.17649 8.27357 3.95145 8.04853C3.7264 7.82348 3.6 7.51826 3.6 7.2V4.8ZM3.6 12C3.6 11.6817 3.7264 11.3765 3.95145 11.1515C4.17649 10.9264 4.48172 10.8 4.8 10.8H12C12.3183 10.8 12.6235 10.9264 12.8485 11.1515C13.0736 11.3765 13.2 11.6817 13.2 12V19.2C13.2 19.5183 13.0736 19.8235 12.8485 20.0485C12.6235 20.2736 12.3183 20.4 12 20.4H4.8C4.48172 20.4 4.17649 20.2736 3.95145 20.0485C3.7264 19.8235 3.6 19.5183 3.6 19.2V12ZM16.8 10.8C16.4817 10.8 16.1765 10.9264 15.9515 11.1515C15.7264 11.3765 15.6 11.6817 15.6 12V19.2C15.6 19.5183 15.7264 19.8235 15.9515 20.0485C16.1765 20.2736 16.4817 20.4 16.8 20.4H19.2C19.5183 20.4 19.8235 20.2736 20.0485 20.0485C20.2736 19.8235 20.4 19.5183 20.4 19.2V12C20.4 11.6817 20.2736 11.3765 20.0485 11.1515C19.8235 10.9264 19.5183 10.8 19.2 10.8H16.8Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-4">
                Monitoreo en Tiempo Real
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seguimiento GPS en vivo de toda tu flota con alertas
                automáticas, reportes de estado y notificaciones de eventos
                importantes durante el recorrido.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-gray-200 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-agrorutas-green rounded-lg flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M2.4 13.2C2.4 12.8817 2.5264 12.5765 2.75145 12.3515C2.97649 12.1264 3.28172 12 3.6 12H6C6.31828 12 6.62351 12.1264 6.84855 12.3515C7.07359 12.5765 7.2 12.8817 7.2 13.2V19.2C7.2 19.5183 7.07359 19.8235 6.84855 20.0485C6.62351 20.2736 6.31828 20.4 6 20.4H3.6C3.28172 20.4 2.97649 20.2736 2.75145 20.0485C2.5264 19.8235 2.4 19.5183 2.4 19.2V13.2ZM9.6 8.4C9.6 8.08174 9.7264 7.77651 9.95145 7.55147C10.1765 7.32643 10.4817 7.2 10.8 7.2H13.2C13.5183 7.2 13.8235 7.32643 14.0485 7.55147C14.2736 7.77651 14.4 8.08174 14.4 8.4V19.2C14.4 19.5183 14.2736 19.8235 14.0485 20.0485C13.8235 20.2736 13.5183 20.4 13.2 20.4H10.8C10.4817 20.4 10.1765 20.2736 9.95145 20.0485C9.7264 19.8235 9.6 19.5183 9.6 19.2V8.4ZM16.8 4.8C16.8 4.48174 16.9264 4.17651 17.1515 3.95147C17.3765 3.72643 17.6817 3.6 18 3.6H20.4C20.7183 3.6 21.0235 3.72643 21.2485 3.95147C21.4736 4.17651 21.6 4.48174 21.6 4.8V19.2C21.6 19.5183 21.4736 19.8235 21.2485 20.0485C21.0235 20.2736 20.7183 20.4 20.4 20.4H18C17.6817 20.4 17.3765 20.2736 17.1515 20.0485C16.9264 19.8235 16.8 19.5183 16.8 19.2V4.8Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-4">
                Análisis Predictivo
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Predicción de demanda basada en datos históricos y patrones
                estacionales, optimizando inventarios y planificación de rutas
                futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interface Preview Section */}
      <section className="bg-agrorutas-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-agrorutas-dark-green mb-6">
                Interfaz Intuitiva de Control
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Gestiona todas tus operaciones desde un panel centralizado
                diseñado específicamente para las necesidades del sector
                agrícola rural.
              </p>

              {/* Tab Navigation */}
              <div className="flex gap-1 mb-8">
                <button className="px-6 py-3 bg-agrorutas-green text-white text-sm font-medium rounded-lg">
                  Planificación
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg">
                  Seguimiento
                </button>
                <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg">
                  Reportes
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-agrorutas-dark-green mb-4">
                Optimización de Rutas
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Algoritmos avanzados que calculan las rutas más eficientes para
                la distribución rural, considerando factores como distancia,
                condiciones del terreno y capacidad de carga.
              </p>

              <div className="h-32 bg-agrorutas-light-green rounded-lg flex items-center justify-center">
                <span className="text-agrorutas-green text-sm font-medium">
                  Vista Previa de Funcionalidad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="soluciones" className="bg-agrorutas-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-agrorutas-dark-green mb-4">
              Soluciones Especializadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptadas a los desafíos únicos de la distribución rural en
              Cajamarca
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {/* Solution 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-agrorutas-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-3">
                      Distribución a Comunidades Remotas
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conecta eficientemente con comunidades de difícil acceso,
                      optimizando rutas que consideran condiciones climáticas y
                      geográficas específicas de la sierra cajamarquina.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-agrorutas-brown rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-3">
                      Logística de Productos Agrícolas
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gestión especializada para el transporte de productos
                      perecederos, con control de temperatura y tiempos
                      optimizados para mantener la calidad.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-agrorutas-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-agrorutas-dark-green mb-3">
                      Coordinación Multi-Modal
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Integración de diferentes medios de transporte adaptados
                      al terreno: vehículos, motocicletas y transporte a pie
                      para llegar a cualquier destino.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-agrorutas-dark-green mb-8">
                Beneficios Comprobados
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-agrorutas-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3657 4.23435C13.5157 4.38437 13.5999 4.58782 13.5999 4.79995C13.5999 5.01208 13.5157 5.21553 13.3657 5.36555L6.96568 11.7656C6.81566 11.9155 6.61221 11.9998 6.40008 11.9998C6.18795 11.9998 5.9845 11.9155 5.83448 11.7656L2.63448 8.56555C2.48876 8.41467 2.40812 8.21259 2.40994 8.00283C2.41177 7.79307 2.4959 7.59242 2.64423 7.4441C2.79255 7.29577 2.9932 7.21163 3.20296 7.20981C3.41272 7.20799 3.6148 7.28863 3.76568 7.43435L6.40008 10.0688L12.2345 4.23435C12.3845 4.08437 12.588 4.00012 12.8001 4.00012C13.0122 4.00012 13.2157 4.08437 13.3657 4.23435Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Reducción de costos operativos hasta 35%
                    </h4>
                    <p className="text-sm text-gray-500">Optimización de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
