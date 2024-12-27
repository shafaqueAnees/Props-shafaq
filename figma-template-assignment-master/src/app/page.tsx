import Caring from '@/components/Caring'
import Clients from '@/components/Clients'
import Community from '@/components/Community'
import Design from '@/components/Design'
import Footer from '@/components/Footer'
import Helping from '@/components/Helping'
import Lessons from '@/components/Lessons'
import Navbar from '@/components/Navbar'
import Tim from '@/components/Tim'
import Unseen from '@/components/Unseen'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
       <Lessons/>
      <Clients/>
      <Community/>
      <Unseen/>
      <Helping/>
      <Design/>
      <Tim/>
      <Caring/>
      <Footer/>
    </div>
  )
}

export default page
