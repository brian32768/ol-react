import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {DragRotateAndZoom} from 'ol/interaction'
import OLInteraction from './ol-interaction'

class OLDragRotateAndZoom extends OLInteraction {
    static propTypes = {
        ...OLInteraction.propTypes,
        condition: PropTypes.func,
        duration: PropTypes.number
    }

    createInteraction() {
    	return new DragRotateAndZoom({
    	    condition: this.props.condition,
    	    duration: this.props.duration
    	})
    }
}
const mapStateToProps = (state) => ({
    map: state.map.theMap
})
export default connect(mapStateToProps)(OLDragRotateAndZoom);
