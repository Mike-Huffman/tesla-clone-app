import React from 'react'
import Section from './Section'

function Home() {
    return (
        <div>
        <Section
            title="Car 1"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
         <Section
            title="Car 2"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
           <Section
            title="Car 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
           <Section
            title="Car 4"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
         />
        
            
        </div>
    )
}

export default Home


