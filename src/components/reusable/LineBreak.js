import React from 'react';


const LineBreak = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3,
            marginTop: 50
        }}
    />
);

export default LineBreak;