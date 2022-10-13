import React from 'react'
import SavedMovies from '../components/SavedMovies'

const Account = () => {
  return (
    <>
        <div className='w-full text-white'>
            <img 
                className='w-full h-[400px] object-cover' 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/7b43175d-df58-4148-84ad-b6525a738515/BR-pt-20221010-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="Netflix Homepage Backgroud" 
            />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
            <div className='absolute top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>My Movies</h1>
            </div>
        </div>
        <SavedMovies />
    </>
  )
}

export default Account