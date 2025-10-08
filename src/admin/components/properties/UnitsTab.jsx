import React from 'react';
import { mockUnits } from '../../../data/units';
import { Bed, Bath, Square, CheckCircle, XCircle } from 'lucide-react';

const UnitsTab = ({ property }) => {
    const units = mockUnits.filter(u => u.propertyId === property.id);

    if (units.length === 0) {
        return <p>No units found for this property.</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm">
                <thead className="bg-secondary-50 text-left text-secondary-600">
                    <tr>
                        <th className="p-3 font-semibold">Unit No.</th>
                        <th className="p-3 font-semibold">Details</th>
                        <th className="p-3 font-semibold">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {units.map(unit => (
                        <tr key={unit.id} className="border-b last:border-0">
                            <td className="p-3 font-medium">{unit.title}</td>
                            <td className="p-3">
                                <div className="flex items-center gap-4 text-secondary-600">
                                    <span className="flex items-center gap-1"><Bed size={14} /> {unit.beds}</span>
                                    <span className="flex items-center gap-1"><Bath size={14} /> {unit.baths}</span>
                                    <span className="flex items-center gap-1"><Square size={14} /> {unit.area} sqft</span>
                                </div>
                            </td>
                            <td className="p-3">
                                <span className={`flex items-center gap-1 text-xs font-medium ${unit.available ? 'text-green-600' : 'text-red-600'}`}>
                                    {unit.available ? <CheckCircle size={14} /> : <XCircle size={14} />}
                                    {unit.available ? 'Available' : 'Occupied'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UnitsTab;
