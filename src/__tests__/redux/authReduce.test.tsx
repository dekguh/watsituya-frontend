import React from 'react'
import reduce, { actSetAddress, actSetIsLogin, initialState } from '../../utils/redux/auth/reduce'

describe('auth reducer testing', () => {
    /**
     * should return initial state
     */
    it('should return initial state', () => {
        expect(reduce(undefined, { type: '' })).toEqual(initialState)
    })

    /**
     * test actSetAddress should return address
     */
    test('actSetAddress should return address', () => {
        expect(reduce(initialState, actSetAddress('address'))).toEqual({
            address: 'address',
            isLogin: false
        })
    })

    /**
     * test actSetAddress should return address
     */
     test('actSetIsLogin should return true', () => {
        expect(reduce(initialState, actSetIsLogin(true))).toEqual({
            address: '',
            isLogin: true
        })
    })
})