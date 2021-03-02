import React from 'react'

const FeatureCard = ({heading, feature}) => {
    return (
        <div className="featureCard">
            <div className="h-4 heading">{heading}</div>
            <p className="h-4">{feature}</p>
        </div>
    )
}

export default FeatureCard
