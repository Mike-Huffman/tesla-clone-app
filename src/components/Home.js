import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
        <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
         <Section
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
           <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
           <Section
            title="Model Y"
            description="Site built by Mike"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
        
            
        </div>
    )
}

export default Home


