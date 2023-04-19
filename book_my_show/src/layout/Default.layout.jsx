//rafce
import React from 'react'

const DefaultLayoutHoc =
 (component) =>
 ({...props}) => {
    return(
        <div>
            component {...props}</div>

    )
}
export default DefaultLayoutHoc