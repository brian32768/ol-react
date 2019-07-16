import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {Vector as olVectorSource} from 'ol/source'
import {Collection as olCollection} from 'ol'
import FeatureFormat from 'ol/format/Feature'
import {bbox as bboxStrategy} from 'ol/loadingstrategy'
import {DataLoader} from './dataloaders'
import {LayerContext} from '../layer-context'

const JSONSource = (props) => {
    const layer = useContext(LayerContext)
    console.log("JSON", props);
    const source = new olVectorSource({
        strategy: bboxStrategy
    });
    source.setLoader(DataLoader(props.loader, props.url, source));
    layer.setSource(source)
    return null;
}
JSONSource.propTypes = {
    url: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired,
    loader: PropTypes.string.isRequired, // "geojson" || "esrijson"

    attributions: PropTypes.func,
    features: PropTypes.instanceOf(olCollection),
    format: PropTypes.instanceOf(FeatureFormat)
};
export default JSONSource;
