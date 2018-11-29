import React from 'react';
import PropTypes from 'prop-types';
import OLPropTypes from '../ol-proptypes'
import ol from 'ol';
import OLControl from './ol-control';

export default class ZoomToExtent extends OLControl {
  createControl (props) {
    return new ol.control.ZoomToExtent({
      className: props.className,
      extent: props.extent,
      label: props.label,
      tipLabel: props.tipLabel
    })
  }
}

ZoomToExtent.propTypes = Object.assign({}, OLControl.propTypes, {
  className: PropTypes.string,
  extent: OLPropTypes.Extent,
  label: PropTypes.node,
  tipLabel: PropTypes.string
})
