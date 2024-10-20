// src/Components/CalculatorModal.js
import React from 'react';

const CalculatorModal = () => {
    return (
        <div id="calculator-modal" className="modal hidden">
            <div className="modal-content">
                <span className="close">&times;</span>
                <h2>Project Cost Calculator</h2>
                <label htmlFor="pages">Number of Pages:</label>
                <input type="number" id="pages" name="pages" min="1" defaultValue="1" />
                <label htmlFor="complexity">Complexity:</label>
                <select id="complexity" name="complexity">
                    <option value="simple">Simple</option>
                    <option value="moderate">Moderate</option>
                    <option value="complex">Complex</option>
                </select>
                <button id="calculate-cost">Calculate</button>
                <p id="result">Estimated Cost: $0</p>
            </div>
        </div>
    );
};

export default CalculatorModal;