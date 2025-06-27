from flask import Flask, render_template, request
import networkx as nx
import folium
import math

app = Flask(__name__)
G = nx.read_graphml("CajamarcaSimpleRoads.graphml")

# Heurística de Haversine para A*
def haversine_heuristic(u, v):
    lat1, lon1 = G.nodes[u]['lat']
    lon1 = G.nodes[u]['lon']
    lat2 = G.nodes[v]['lat']
    lon2 = G.nodes[v]['lon']
    R = 6371.0
    dphi = math.radians(lat2 - lat1)
    dlambda = math.radians(lon2 - lon1)
    a = math.sin(dphi/2)**2 + math.cos(math.radians(lat1)) * math.cos(math.radians(lat2)) * math.sin(dlambda/2)**2
    return 2 * R * math.atan2(math.sqrt(a), math.sqrt(1 - a))

@app.route("/", methods=["GET", "POST"])
def index():
    route_coords = None
    selected_algo = "dij"
    orig = dest = None

    node_list = list(G.nodes)

    if request.method == "POST":
        orig = request.form.get("origin")
        dest = request.form.get("destination")
        selected_algo = request.form.get("algo")

        if orig and dest:
            try:
                if selected_algo == "astar":
                    path = nx.astar_path(G, orig, dest, heuristic=haversine_heuristic, weight="dist")
                else:
                    path = nx.shortest_path(G, orig, dest, weight="dist")
                route_coords = [(G.nodes[n]["lat"], G.nodes[n]["lon"]) for n in path]
            except Exception as e:
                print("Error:", e)

    # Mapa
    center = (G.nodes[node_list[0]]["lat"], G.nodes[node_list[0]]["lon"])
    m = folium.Map(location=center, zoom_start=12)

    if route_coords:
        folium.Marker(route_coords[0], tooltip="Origen", icon=folium.Icon(color='blue')).add_to(m)
        folium.Marker(route_coords[-1], tooltip="Destino", icon=folium.Icon(color='red')).add_to(m)
        folium.PolyLine(route_coords, color='green', weight=5).add_to(m)

    map_html = m._repr_html_()

    return render_template("index.html", map=map_html, nodes=node_list, orig=orig, dest=dest, algo=selected_algo)

if __name__ == "__main__":
    app.run(debug=True)
