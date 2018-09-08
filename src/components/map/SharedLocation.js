import React from 'react'
import { connect } from 'react-redux'
import { getLoadedLayerFromMap } from './../../mapboxhelper'

class SharedLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null
    }
    this.layerId = 'sharedlocation'
  }

  circleStyle = {
    'circle-color': 'transparent',
    'circle-stroke-color': '#009311',
    'circle-radius': 7,
    'circle-stroke-width': 2
  }

  componentDidMount() {
    const { map, sharedLocation } = this.props

    map.on('load', () => {
      map.addSource(this.layerId, { type: 'geojson', data: sharedLocation })
      map.addLayer({ id: this.layerId, source: this.layerId, type: 'circle', paint: this.circleStyle })
    })
  }

  componentDidUpdate = async (prevProps) => {
    const { sharedLocation, sharing, map } = this.props
    const layer = await getLoadedLayerFromMap(map, this.layerId)
    if (sharing) {
      map.setFilter(this.layerId, null)
    } else {
      map.setFilter(this.layerId, ['==', '-', ''])
    }
    layer.setData(sharedLocation)
    map.moveLayer('userLocation', this.layerId)
  }

  render() {
    return null
  }
}

const mapStateToProps = (state) => ({
  sharedLocation: state.locationShare.locationFeature,
  sharing: state.locationShare.sharing
})

const ConnectedSharedLocation = connect(mapStateToProps, null)(SharedLocation)

export default ConnectedSharedLocation