import React from 'react'
import { Navbar, Starts } from './components'

import styles from './styles'
const App = () => 
  (
    <div className='bg-primary w-full overflow-hidden'>
 
<div className={`${styles.paddingX} ${styles.flexCenter }`}>
  <div className={`${styles.boxWidth}`}>
    <Navbar/>
  </div>
</div>

<div className={`bg-primary ${styles.flexStart}`}>
  <div className={`${styles.boxWidth }`}>Hero component</div>
</div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth }`}>
   <Starts/>
    Business
    Billing
    CardDeal
    Testimonials
    clients
    CTA
    Footer 
    </div>
</div>

    </div>
  )
export default App
