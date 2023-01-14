import React, { useState } from 'react';

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTenure, setLoanTenure] = useState(0);
    let [emi, setEMI] = useState(0);

    const calculateEMI = (event) => {
        event.preventDefault();
        // Calculate the EMI using the following formula:
        // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
        // where P = loan amount, R = monthly interest rate, N = loan tenure in months
        const monthlyInterestRate = interestRate / (12 * 100);
        const num = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure);
        const den = Math.pow(1 + monthlyInterestRate, loanTenure) - 1;
        const calculatedEMI = num / den;
        setEMI(Math.round(calculatedEMI || 0));
    }

    return (
        <div className="container mx-auto px-4">
            {/* <h1 className="text-2xl text-slate-800 font-bold mb-4">EMI Calculator</h1> */}
            <form className="w-full max-w-xl">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="loan-amount">
                            Loan Amount
                        </label>
                        <input
                            className="bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            placeholder="Enter Loan Amount"
                            id="loan-amount"
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="interest-rate">
                            Interest Rate
                        </label>
                        <input
                            className="bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="interest-rate"
                            placeholder="Enter Interest Rate"
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="interest-rate">
                            Loan Tenure in Months
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="interest-rate"
                            placeholder="Enter Tenure (in Months)"
                            type="number"
                            value={loanTenure}
                            onChange={(e) => setLoanTenure(e.target.value)}
                        />
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={calculateEMI}
                >
                    Calculate EMI
                </button>
                <div className="flex my-4">
                    <span className="tracking-widest text-gray-500 md:text-lg dark:text-gray-400">
                        EMI Payable Monthly Rs.{emi}
                    </span>
                </div>
            </form>
        </div >
    )
}

export default EmiCalculator