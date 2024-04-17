'use client';
import { useSearchParams } from 'next/navigation'

const Results = () => {
    const searchParams = useSearchParams()
    const nextSteps = searchParams.get('nextSteps')
    console.log(nextSteps)
    return (
        <div>
            <p>This is some text</p>
            {nextSteps === "inHouseReviewProcess" &&
                <div>
                    <h1 className="w-full text-center text-4xl font-bold">✅ In-House Review Process</h1>
                    <ul className="steps p-5">
                        <li className="step step-primary">Obtain a building permit</li>
                        <li className="step">Include plan sets</li>
                        <li className="step">Submit application for in-house review</li>
                    </ul>
                </div>
            }
            {nextSteps === "otcSubmissionProcess" &&
                <div>
                    <h1 className="w-full text-center text-4xl font-bold">✅ Over-the-Counter Submission Process</h1>
                    <ul className="steps p-5 justify-center w-full">
                        <li className="step step-primary">Obtain a building permit</li>
                        <li className="step">Submit application for OTC review</li>
                    </ul>
                </div>
            }
            {nextSteps === "noPermit" &&
                <div>
                    <h1 className="w-full text-center text-4xl font-bold">❌ No Permit</h1>
                    <p className="text-center py-5">{"Nothing is required! You're set to build."}</p>

                </div>
            }

        </div>
    )
}

export default Results