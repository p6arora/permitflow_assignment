import { render, screen } from '@testing-library/react'
const { expect, describe, it } = require('@jest/globals');
import Home from '@/app/page'
import Provider from '@/app/_trpc/Provider'

// it('Should have Residential text', () => {
//     render(<Home />) // Arrange
//     const myElem = screen.getByText('Residential')
//     expect(myElem).toBeInDocument()
// })
// it('Should have Residential text', () => {
//     expect(true)
// })

describe('Home component', () => {
    it('Contains Title What Interior Work Are You Doing?', () => {
        const HomeWrapper = () => {

            return (
                <Provider>
                    <Home />
                </Provider>
            )
        };

        render(<HomeWrapper />);
        const myElem = screen.getByText('Residential')
        expect(myElem).toBeInDocument()
    });
});

