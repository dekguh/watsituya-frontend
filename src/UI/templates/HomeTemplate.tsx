import React from 'react'
import Button from '../atoms/controls/Button'

const HomeTemplate = () => {
  return (
    <div>
        <Button variant='secondary'>
            <div className='text'>
                <span className='text-gradient'>
                    minted now
                </span>
            </div>
        </Button>
    </div>
  )
}

export default HomeTemplate