import { useEffect, useRef } from "react";

function NaverMap() {
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    if (!window.naver || !window.naver.maps) return;
    if (mapRef.current) return;

    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const map = new naver.maps.Map(mapContainer, {
      center: new naver.maps.LatLng(37.51133, 126.9522),
      zoom: 17,
      minZoom: 15,
      tileDuration: 300,
      baseTileOpacity: 1,
      background: "white",
      tileSpare: 7,
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.51133, 126.9522),
      map,
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
}

export default NaverMap;
