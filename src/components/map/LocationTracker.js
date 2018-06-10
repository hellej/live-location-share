
import React from 'react'
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js'


class LocationTracker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null
    }
  }

  map = null

  componentDidMount() {
    const map = this.props.map

    const locater = new MapboxGL.GeolocateControl({
      positionOptions: { enableHighAccuracy: true }, trackUserLocation: true
    })

    map.on('load', () => {
      map.addControl(locater)
    })
  }

  render() {
    return null
  }

}


export default LocationTracker