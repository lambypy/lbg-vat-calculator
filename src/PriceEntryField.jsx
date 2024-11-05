import React from 'react'
import NumberEditorField from './NumberEditorField'

Hello hello

const PriceEntryField = (props) => {
    return (
        <div className={props.customstyle}>
            {props.label}
            <NumberEditorField value={props.price} valueChanged={props.priceChanged} />
        </div>
    )
}

export default PriceEntryField