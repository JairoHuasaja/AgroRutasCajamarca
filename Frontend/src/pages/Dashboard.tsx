import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

interface RouteResponse {
  coords: [number, number][];
}

const Dashboard = () => {
  const [origin, setOrigin] = useState("292912800");
  const [destination, setDestination] = useState("352892744");
  const [algo, setAlgo] = useState<"dij" | "astar">("dij");
  const [nodes, setNodes] = useState<string[]>([]);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  // Carga inicial de lista de nodos (puede venir de un endpoint /api/nodes)
  useEffect(() => {
    // Suponiendo un endpoint que devuelva IDs de nodos
    fetch("/api/nodes")
      .then(res => res.json())
      .then((data: string[]) => setNodes(data))
      .catch(() => {
        // fallback dummy
        setNodes([origin, destination]);
      });
  }, []);

  const fetchRoute = async () => {
    const resp = await fetch(
      `/api/route?orig=${origin}&dest=${destination}&algo=${algo}`
    );
    const data: RouteResponse = await resp.json();
    if (data.coords) setRouteCoords(data.coords);
  };

  // Configurar iconos
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-80 p-6 bg-white shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Control de Rutas</h2>

        <label className="flex flex-col">
          Punto de Origen
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="mt-1 p-2 border rounded"
          >
            {nodes.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          Punto de Destino
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="mt-1 p-2 border rounded"
          >
            {nodes.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col">
          Algoritmo
          <select
            value={algo}
            onChange={(e) => setAlgo(e.target.value as any)}
            className="mt-1 p-2 border rounded"
          >
            <option value="dij">Dijkstra</option>
            <option value="astar">A*</option>
          </select>
        </label>

        <button
          onClick={fetchRoute}
          className="mt-4 p-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Calcular Ruta
        </button>
      </div>

      {/* Mapa */}
      <div className="flex-1">
        <MapContainer
          center={routeCoords[0] || [-7.165, -78.5]}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {routeCoords.length > 0 && (
            <>
              <Marker position={routeCoords[0]} />
              <Marker position={routeCoords[routeCoords.length - 1]} />
              <Polyline positions={routeCoords} color="green" weight={5} />
            </>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Dashboard;
