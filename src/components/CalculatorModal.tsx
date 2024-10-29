// src/components/CalculatorModal.tsx
import React from 'react';

const CalculatorModal: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden" id="calculator-modal">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
                <button className="text-red-500 absolute top-4 right-4 text-xl">×</button>
                <h2 className="text-2xl font-bold mb-4">Project Cost Calculator</h2>
                <label htmlFor="pages" className="block text-left mb-2">Number of Pages:</label>
                <input type="number" id="pages" name="pages" min="1" defaultValue="1" className="w-full p-2 border rounded mb-4" />
                <label htmlFor="complexity" className="block text-left mb-2">Complexity:</label>
                <select id="complexity" name="complexity" className="w-full p-2 border rounded mb-4">
                    <option value="simple">Simple</option>
                    <option value="moderate">Moderate</option>
                    <option value="complex">Complex</option>
                </select>
                <button className="w-full bg-button text-header-footer-text py-2 rounded hover:bg-green-600 transition">Calculate</button>
                <p id="result" className="mt-4 text-lg">Estimated Cost: $0</p>
            </div>
        </div>
    );
};

export default CalculatorModal;