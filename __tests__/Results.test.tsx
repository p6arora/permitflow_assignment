// Import React and other necessary testing libraries
import { render, screen } from '@testing-library/react';
import Results from '@/app/results/page'; // Adjust the path as necessary
import { useSearchParams } from 'next/navigation';

// Mock next/navigation with a default implementation that can be overridden
jest.mock('next/navigation', () => ({
    useSearchParams: jest.fn()
}));

describe('Results Component', () => {
    it('renders inHouseReviewProcess correctly', () => {
        // Override the useSearchParams mock for this test
        (useSearchParams as jest.Mock).mockImplementation(() => ({
            get: (key: string) => key === 'nextSteps' ? 'inHouseReviewProcess' : null
        }));

        render(<Results />);
        expect(screen.getByText('✅ In-House Review Process')).toBeInTheDocument();
        expect(screen.getByText('Obtain a building permit')).toBeInTheDocument();
        expect(screen.getByText('Include plan sets')).toBeInTheDocument();
        expect(screen.getByText('Submit application for in-house review')).toBeInTheDocument();
    });

    it('renders otcSubmissionProcess correctly', () => {
        // Override the useSearchParams mock for this test
        (useSearchParams as jest.Mock).mockImplementation(() => ({
            get: (key: string) => key === 'nextSteps' ? 'otcSubmissionProcess' : null
        }));

        render(<Results />);
        expect(screen.getByText('✅ Over-the-Counter Submission Process')).toBeInTheDocument();
        expect(screen.getByText('Obtain a building permit')).toBeInTheDocument();
        expect(screen.getByText('Submit application for OTC review')).toBeInTheDocument();
    });

    it('renders noPermit correctly', () => {
        // Override the useSearchParams mock for this test
        (useSearchParams as jest.Mock).mockImplementation(() => ({
            get: (key: string) => key === 'nextSteps' ? 'noPermit' : null
        }));

        render(<Results />);
        expect(screen.getByText('❌ No Permit')).toBeInTheDocument();
    });
});

