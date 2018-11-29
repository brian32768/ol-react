import React from 'react';
import PropTypes from 'prop-types';
import ol from 'ol';
import OLInteraction from './ol-interaction';

export default class Select extends OLInteraction {
  createInteraction (props) {
    return new ol.interaction.Select({
      condition: props.condition
    })
  }
}

Select.propTypes = Object.assign({}, OLInteraction.propTypes, {
  condition: PropTypes.func,
  select: PropTypes.func
})

Select.olEvents = ["select"]
