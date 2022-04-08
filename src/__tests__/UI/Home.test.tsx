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
        expect(screen.getByText(/Watsituya/i))
        expect(screen.getByText(/home/i))
        expect(screen.getByText(/featured/i))
        expect(screen.getByText(/listing/i))
        expect(screen.getByText(/about us/i))
        expect(screen.getByText(/contact/))

        // button
        expect(screen.getByText(/connect wallet/))
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

        expect(screen.getByText(/Bitcoin\/USD/))
        expect(screen.getByText(/ETH\/USD/))
        expect(screen.getByText(/Yearn\/USD/))
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