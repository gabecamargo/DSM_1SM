import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useCenso } from "../context/CensoContext";
import { getSetorByPoint } from "../api/censoService";
import { useEffect, useMemo, useState } from "react";
import * as wellknown from "wellknown";
import L from "leaflet";
import { InfoBox } from "./InfoBox";

// Ajusta a visão do mapa com base nos polígonos carregados
function AjustarVisaoPoligonos({ features }: { features: any[] }) {
  const map = useMap();

  useEffect(() => {
    const layerGroup = L.geoJSON({ type: "FeatureCollection", features });
    const bounds = layerGroup.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [features, map]);

  return null;
}

// Captura clique no mapa e exibe info do setor clicado
function MapClickHandler({ setInfo }: { setInfo: (data: any) => void }) {
  useMapEvents({
    click: async (e) => {
      const res = await getSetorByPoint(e.latlng.lng, e.latlng.lat);
      setInfo(res);
    },
  });
  return null;
}

export default function Mapa() {
  const { setores } = useCenso();
  const [info, setInfo] = useState<any>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const geojsonFeatures = useMemo(() => {
    return setores
      .map((s, i) => {
        try {
          const parsed = wellknown.parse(s.geom);
          if (parsed?.type === "Polygon" || parsed?.type === "MultiPolygon") {
            return {
              type: "Feature",
              geometry: parsed,
              properties: { id: i, ...s },
            };
          }
        } catch (err) {
          console.error("Erro ao converter WKT:", err);
        }
        return null;
      })
      .filter((f) => f !== null);
  }, [setores]);

  const onEachFeature = (feature: any, layer: L.Layer) => {
    layer.on("click", () => {
      if (selectedId === feature.properties.id) {
        setSelectedId(null);
        setInfo(null);
      } else {
        setSelectedId(feature.properties.id);
        setInfo(feature.properties);
      }
    });
  };

  const styleFeature = (feature: any) => {
    const isSelected = feature.properties.id === selectedId;
    return {
      color: isSelected ? "orange" : "#0078FF",
      weight: isSelected ? 2 : 1,
      fillColor: isSelected ? "#ff9933" : "#3388ff",
      fillOpacity: isSelected ? 0.6 : 0.2,
    };
  };

  if (!geojsonFeatures.length) return <div>Carregando setores...</div>;

  return (
    <MapContainer
      center={[-23.3, -46.3]}
      zoom={8}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        key={`geojson-${geojsonFeatures.length}-${selectedId}`}
        data={{ type: "FeatureCollection", features: geojsonFeatures }}
        onEachFeature={onEachFeature}
        style={styleFeature}
      />

      <AjustarVisaoPoligonos features={geojsonFeatures} />
      <MapClickHandler setInfo={setInfo} />

      {info && <InfoBox info={info} />}
    </MapContainer>
  );
}
