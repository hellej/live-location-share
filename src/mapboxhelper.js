export const createGeoJSONPoint = (lng, lat) => {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lng, lat]
    }
  }
}

export const addTimestampToGeoJSON = (geojson) => {
  const geojsonWithTime = Object.assign(geojson)
  geojsonWithTime.properties
    ? geojsonWithTime.properties = { ...geojsonWithTime.properties, time: Date.now() }
    : geojsonWithTime.properties = { time: Date.now() }
  return geojsonWithTime
}

export const createPointFeatureCollection = (pointFeature) => {
  return {
    type: 'FeatureCollection',
    features: [pointFeature]
  }
}

export const getLoadedLayerFromMap = async (map, layerId) => {
  for (let i = 1; i < 8; i++) {
    const layer = map.getSource(layerId)
    if (layer) return layer
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

export const waitForMapSourceToGetLoaded = async (layerId, map) => {
  for (let i = 0; i < 11; i++) {
    if (!map.getSource(layerId)) {
      await new Promise(resolve => setTimeout(resolve, 500))
    } else {
      return
    }
  }
  console.log('map source not loaded: ', layerId)
}

export const emptyFeatureCollection = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [null, null]
    }
  }]
}
