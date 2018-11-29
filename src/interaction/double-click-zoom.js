import React from 'react';
import PropTypes from 'prop-types';
import ol from 'ol';
import OLInteraction from './ol-interaction';

export default class DoubleClickZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.DoubleClickZoom({
      delta: props.delta,
      duration: props.duration
    })
  }
}

DoubleClickZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  delta: PropTypes.number,
  duration: PropTypes.number
})
