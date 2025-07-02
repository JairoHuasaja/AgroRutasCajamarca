import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan@email.com",
    phone: "+51 987 654 321",
    userType: "Distribuidor Rural",
    password: "Mínimo 8 caracteres",
    confirmPassword: "Repite tu contraseña",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-agrorutas-bg font-['Inter'] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Signup Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-agrorutas-green rounded-lg flex items-center justify-center mb-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.05708 15.0886H5.17708V22.9286C5.17708 24.164 6.18172 25.1686 7.41708 25.1686H20.8571C22.0925 25.1686 23.0971 24.164 23.0971 22.9286V15.0886H24.2171C24.4385 15.0886 24.655 15.0229 24.8392 14.8998C25.0233 14.7768 25.1669 14.6019 25.2516 14.3973C25.3363 14.1926 25.3585 13.9675 25.3154 13.7502C25.2721 13.5331 25.1655 13.3335 25.0089 13.1768L14.1371 3.425L3.26524 13.1768C3.10865 13.3335 3.00202 13.5331 2.95882 13.7502C2.91563 13.9675 2.93781 14.1926 3.02256 14.3973C3.10731 14.6019 3.25083 14.7768 3.43497 14.8998C3.6191 15.0229 3.8356 15.0886 4.05708 15.0886Z"
                  fill="white"
                />
                <path
                  d="M14.1371 8.3687C12.2846 8.3687 10.777 9.87622 10.777 11.7286C10.777 13.5811 12.2846 15.0886 14.1371 15.0886C15.9895 15.0886 17.4971 13.5811 17.4971 11.7286C17.4971 9.87622 15.9895 8.3687 14.1371 8.3687Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-agrorutas-dark-green">
                AgroRutas
              </h1>
              <p className="text-[#A8C5A0] text-sm">Cajamarca</p>
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-agrorutas-dark-green mb-2">
              Crear Cuenta
            </h2>
            <p className="text-gray-500 max-w-xs mx-auto leading-relaxed">
              Únete a la red de distribución rural más eficiente
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.3333 10C13.3333 9.11595 12.9821 8.2681 12.357 7.64298C11.7319 7.01786 10.8841 6.66667 10 6.66667C9.11595 6.66667 8.2681 7.01786 7.64298 7.64298C7.01786 8.2681 6.66667 9.11595 6.66667 10C6.66667 10.8841 7.01786 11.7319 7.64298 12.357C8.2681 12.9921 9.11595 13.3333 10 13.3333C10.8841 13.3333 11.7319 12.9921 12.357 12.357C12.9821 11.7319 13.3333 10.8841 13.3333 10ZM13.3333 10V11.25C13.3333 11.8025 13.5528 12.3324 13.9435 12.7231C14.3342 13.1138 14.8641 13.3333 15.4167 13.3333C15.9692 13.3333 16.4991 13.1138 16.8898 12.7231C17.2805 12.3324 17.5 11.8025 17.5 11.25V10C17.5 8.51664 17.0601 7.0666 16.236 5.83323C15.4119 4.59986 14.2406 3.63856 12.8701 3.07091C11.4997 2.50325 9.99168 2.35472 8.53683 2.64411C7.08197 2.9335 5.7456 3.64781 4.6967 4.6967C3.64781 5.7456 2.9335 7.08197 2.64411 8.53683C2.35472 9.99168 2.50325 11.4997 3.07091 12.8701C3.63856 14.2406 4.59986 15.4119 5.83323 16.236C7.0666 17.0601 8.51664 17.5 10 17.5C11.3168 17.5013 12.6106 17.1551 13.75 16.495"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H6.9C7.07483 2.50013 7.24519 2.55525 7.38696 2.65754C7.52874 2.75984 7.63475 2.90413 7.69 3.07L8.93833 6.81417C9.00158 7.00445 8.9941 7.21116 8.91726 7.39637C8.84042 7.58158 8.69938 7.73288 8.52 7.8225L6.63917 8.76417C7.5611 10.8046 9.19538 12.4389 11.2358 13.3608L12.1775 11.48C12.2671 11.3006 12.4184 11.1596 12.6036 11.0827C12.7888 11.0059 12.9956 10.9984 13.1858 11.0617L16.93 12.31C17.096 12.3653 17.2404 12.4714 17.3427 12.6134C17.445 12.7553 17.5 12.9259 17.5 13.1008V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H15C8.09667 17.5 2.5 11.9033 2.5 5V4.16667Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* User Type Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Usuario
              </label>
              <div className="relative">
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-10 border border-gray-300 rounded-lg bg-gray-200 focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="Distribuidor Rural">Distribuidor Rural</option>
                  <option value="Productor Agrícola">Productor Agrícola</option>
                  <option value="Cooperativa">Cooperativa</option>
                  <option value="Transportista">Transportista</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path d="M9 1H1L5 9L9 1Z" stroke="currentColor" />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.04834 9.99996C3.11001 6.61913 6.26917 4.16663 10 4.16663C13.7317 4.16663 16.89 6.61913 17.9517 9.99996C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99996Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agrorutas-green focus:border-agrorutas-green outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 hover:text-gray-600"
                >
                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.04834 9.99996C3.11001 6.61913 6.26917 4.16663 10 4.16663C13.7317 4.16663 16.89 6.61913 17.9517 9.99996C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99996Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms and Privacy Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-3 h-3 mt-1 border border-gray-400 rounded bg-white focus:ring-2 focus:ring-agrorutas-green flex-shrink-0"
                  required
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  Acepto los{" "}
                  <a href="#" className="text-agrorutas-green hover:underline">
                    Términos de Servicio
                  </a>{" "}
                  y las condiciones de uso de la plataforma
                </span>
              </label>

              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptPrivacy}
                  onChange={(e) => setAcceptPrivacy(e.target.checked)}
                  className="w-3 h-3 mt-1 border border-gray-400 rounded bg-white focus:ring-2 focus:ring-agrorutas-green flex-shrink-0"
                  required
                />
                <span className="text-sm text-gray-700 leading-relaxed">
                  Acepto la{" "}
                  <a href="#" className="text-agrorutas-green hover:underline">
                    Política de Privacidad
                  </a>{" "}
                  y el tratamiento de mis datos personales
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-12 bg-agrorutas-green text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Crear Cuenta
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-center text-sm text-gray-500 mb-4">
                ¿Ya tienes una cuenta?
              </p>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="w-full h-12 bg-white border border-gray-300 text-agrorutas-green font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Iniciar Sesión
              </button>
            </div>

            {/* Terms */}
            <div className="text-center text-xs text-gray-400 leading-relaxed">
              Al crear una cuenta, aceptas automáticamente recibir
              notificaciones sobre rutas y actualizaciones del sistema
            </div>
          </form>
        </div>

        {/* System Status Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-3 h-3 bg-agrorutas-green rounded-full"></div>
            <span className="text-sm font-medium text-agrorutas-dark-green">
              Sistema Activo
            </span>
          </div>
          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>Optimización de Distribución Rural</p>
            <p>Región: Cajamarca, Perú</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
