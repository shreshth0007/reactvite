import React, { useState } from 'react'
import naruto from '../assets/22818.webp'

const ImageManipulation = () => {

    const [narutoHeight, setNarutoHeight] = useState(200)
    const [narutoWidth, setNarutoWidth] = useState(200)

    function incHt() {
        setNarutoHeight(narutoHeight + 10)
    }

    function decHt() {
        setNarutoHeight(narutoHeight - 10)
    }

    function incWt() {
        setNarutoWidth(narutoWidth + 10)
    }

    function decWt() {
        setNarutoWidth(narutoWidth - 10)
    }

    return (
        <div>
            <h2>Image Manipulation</h2>

            <div
                style={{
                    height: '400px',
                    width: '400px',
                    border: '4px solid red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src={naruto}
                    alt="fail to load"
                    height={narutoHeight}
                    width={narutoWidth}
                />
            </div>

            <div>
                <button onClick={incHt}>Increase Height</button>
                <button onClick={decHt}>Decrease Height</button>
                <button onClick={incWt}>Increase Width</button>
                <button onClick={decWt}>Decrease Width</button>
            </div>
        </div>
    )
}

export default ImageManipulation

