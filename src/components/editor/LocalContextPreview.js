import React from 'react'
import Card from 'react-bootstrap/Card'
import VariableGroup from '../util/VariableGroupPreview'
import PropTypes from 'prop-types'
import {contextToVariables} from '../../yolol/converters'

export default function LocalContextPreview({code:{codable, localContext}, executing}) {
  if(codable) {
    return (
      <Card className="text-center" border="secondary">
        <Card.Title>Local Variables</Card.Title>
        { executing && localContext
          ? <VariableGroup variables={contextToVariables(localContext)}/>
          : <React.Fragment/>
        }
      </Card>
    )
  }
  return (<React.Fragment/>)
}

LocalContextPreview.propTypes = {
  code: PropTypes.object.isRequired,
  executing: PropTypes.bool.isRequired,
}