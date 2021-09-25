import React, { Component } from "react";

class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({
      lat: nextProps.latitude,
      lng: nextProps.longitud,
    });
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {
        lat: this.props.latitude,
        lng: this.props.longitud,
      },
      zoom: 8,
    });
  }
  render() {
    return <div id="map" ref="map" />;
  }
}

export default GoogleMap;
