import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Locations from '../Components/Locations'
import SearchField from '../Components/SearchField'
import WorldwideMarketing from '../Components/WorldwideMarketing'

const Routes = () => {
  return (
    <div>
        <NavbarHome/>
        <Locations/>
        <SearchField/>
        <Banner />
        <WorldwideMarketing/>
        <Footer/>
    </div>
  )
}

export default Routes