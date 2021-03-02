import React from 'react'
import FeatureCard from './FeatureCard'

const Features = () => {
    return (
      <div className="container">
        <div className="features mt-xl">
          <FeatureCard
            feature="More than 1000+ Houses sold and Bought.Generated more than 30 Million in Revenue."
            heading="Top 1% in Sales"
          />
          <FeatureCard
            feature="Been in Real Estate Business since 2008."
            heading="Over 12+ Years Of Experience"
          />
          <FeatureCard
            feature="Lowest commission rates in the market. Only 1.5% commission Rate."
            heading="Low Commission Rates"
          />
          <FeatureCard
            feature="Have a bad credit history. Don't worry about it."
            heading="No Mortgage Worries"
          />
          <FeatureCard
            feature="Your house sold within 3 days. If house not sold, I will buy it."
            heading="Your House Sold Guarantee"
          />
          <FeatureCard
            feature="You can buy at 5% down."
            heading="Buy House at 5% Down"
          />
        </div>
      </div>
    );
}

export default Features
