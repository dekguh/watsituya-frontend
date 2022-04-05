import { render, screen } from '@testing-library/react'
import React from 'react'
import HomeTemplate from '../../UI/templates/HomeTemplate'

describe('Home Page Testing', () => {
    /**
     * should home page have a navbar section
     */
    it('should have navbar', () => {
        render(<HomeTemplate />)

        // list menu
        expect(screen.getAllByText(/Watsituya/)[0])
        expect(screen.getAllByText(/home/)[0])
        expect(screen.getAllByText(/featured/)[0])
        expect(screen.getAllByText(/listing/)[0])
        expect(screen.getAllByText(/about us/)[0])
        expect(screen.getAllByText(/contact/)[0])

        // button
        expect(screen.getAllByText(/connect now/)[0])
    })

    /**
     * should home page have a home hero section
     */
    it('should home page have a home hero', () => {
        render(<HomeTemplate />)

        expect(screen.getByText('Find Best NFT Collection'))
        expect(screen.getByText('minted now'))
    })

    /**
     * should home page have a rate section
     */
    it('should home page have a rate section', () => {
        render(<HomeTemplate />)

        expect(screen.getByText('Bitcoin/USD'))
        expect(screen.getByText('Ethereum/USD'))
        expect(screen.getByText('Yearn/USD'))
    })

    /**
     * should home page have a featured item section
     */
    it('should home page have a featured item section', () => {
        render(<HomeTemplate />)

        expect(screen.getByText('Featured items for you'))
        expect(screen.getByText('detail item'))
    })

    /**
     * should home page have a new listing item section
     */
    it('should home page have a new listing item section', () => {
        render(<HomeTemplate />)

        expect(screen.getByText('Place a bid for new items'))
        expect(screen.getByText('New Listings'))
    })
})