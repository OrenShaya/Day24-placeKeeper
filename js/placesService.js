
// Initialize and add the map
let map;

async function initMap() {
  // The location of Rehovot
  const position = { lat: 31.90, lng: 34.80 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Rehovot
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Rehovot
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Rehovot",
  });
}

initMap();