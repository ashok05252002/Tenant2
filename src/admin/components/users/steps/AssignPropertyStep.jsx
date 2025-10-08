import React, { useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { mockUnits } from '../../../../data/units';

const AssignPropertyStep = ({ onNext, onBack }) => {
    const [selectedUnit, setSelectedUnit] = useState('');

    const availableUnits = mockUnits.filter(u => u.available);

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Step 3: Assign Property</h3>
            <div>
                <label className="block text-sm font-medium text-secondary-700 mb-1">Select Available Unit</label>
                <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)} className="w-full p-2 border border-secondary-300 rounded-lg">
                    <option value="">Select a unit...</option>
                    {availableUnits.map(unit => (
                        <option key={unit.id} value={unit.id}>{unit.title} - {unit.location}</option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between pt-4">
                <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 text-secondary-600">
                    <ArrowLeft size={16} /> Back
                </button>
                <button onClick={() => onNext({ assignedUnit: selectedUnit })} disabled={!selectedUnit} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg disabled:opacity-50">
                    <CheckCircle size={16} /> Finish & Add Tenant
                </button>
            </div>
        </div>
    );
};

export default AssignPropertyStep;
