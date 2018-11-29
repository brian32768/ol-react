import React from 'react';
import PropTypes from 'prop-types';
import ol from 'ol';
import OLControl from './ol-control';
import { ScaleLineUnits } from './scale-line-units'

export default class ScaleLine extends OLControl {
  createControl (props) {
    return new ol.control.ScaleLine({
      className: props.className,
      minWidth: props.minWidth,
      units: props.units
    })
  }
}

ScaleLine.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  minWidth: PropTypes.number,
  units: PropTypes.oneOf(ScaleLineUnits)
})
