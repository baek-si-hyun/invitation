import { useEffect, useRef } from "react";

function NaverMap() {
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (!window.naver || !window.naver.maps) return;
    if (mapRef.current) return;

    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const map = new naver.maps.Map(mapContainer, {
      center: new naver.maps.LatLng(37.562871, 127.209433),
      zoom: 16,
      minZoom: 15,
      tileDuration: 300,
      baseTileOpacity: 1,
      background: "white",
      tileSpare: 7,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.562871, 127.209433),
      map,
    });
  }, []);

  return <div id="map" style={{ width: "301px", height: "200px" }}></div>;
}

export default NaverMap;
