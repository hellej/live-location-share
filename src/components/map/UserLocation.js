
import React from 'react'
import MapboxGL from 'mapbox-gl/dist/mapbox-gl.js'


const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}

class UserLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null
    }
  }

  componentDidMount() {
    const map = this.props.map

    const geoLocater = new MapboxGL.GeolocateControl({
      positionOptions: { enableHighAccuracy: true }, trackUserLocation: true
    })

    map.on('load', () => {
      map.addControl(geoLocater)
    })

    navigator.geolocation.watchPosition(this.trackLocation, this.geoError, geoOptions)
  }

  trackLocation = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    console.log('tracked: ', lat, ' ', lon)
  }

  geoError = (error) => {
    console.log('no location available')
  }

  render() {
    return null
  }

}


export default UserLocation