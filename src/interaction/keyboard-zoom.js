import React from 'react';
import PropTypes from 'prop-types';
import ol from 'ol';
import OLInteraction from './ol-interaction';

export default class KeyboardZoom extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.KeyboardZoom({
      condition: props.condition,
      delta: props.delta,
      duration: props.duration
    })
  }
}

KeyboardZoom.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  delta: PropTypes.number,
  duration: PropTypes.number
})
