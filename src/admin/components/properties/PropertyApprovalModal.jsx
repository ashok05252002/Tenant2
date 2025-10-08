import React, { useState, useMemo } from 'react';
import { X, Check } from 'lucide-react';

const PropertyApprovalModal = ({ isOpen, onClose, onApprove, property }) => {
    const [adjustmentType, setAdjustmentType] = useState('fixed'); // 'fixed' or 'percentage'
    const [fixedPrice, setFixedPrice] = useState(property.details.price);
    const [percentage, setPercentage] = useState(0);

    if (!isOpen) return null;

    const finalPrice = useMemo(() => {
        if (adjustmentType === 'percentage') {
            const adjustment = (property.details.price * percentage) / 100;
            return (property.details.price + adjustment).toFixed(2);
        }
        return fixedPrice;
    }, [adjustmentType, fixedPrice, percentage, property.details.price]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onApprove(finalPrice);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-bold text-secondary-900">Approve Property</h2>
                    <button onClick={onClose} className="text-secondary-400 hover:text-secondary-600"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <p className="text-sm">You are approving the property: <span className="font-semibold">{property.name}</span></p>
                    <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-1">Requested Price</label>
                        <input type="text" readOnly value={`${property.details.price} OMR`} className="w-full p-2 border rounded-lg bg-secondary-100" />
                    </div>

                    <div className="flex gap-4">
                        <label className="flex items-center"><input type="radio" name="adjType" value="fixed" checked={adjustmentType === 'fixed'} onChange={() => setAdjustmentType('fixed')} /> <span className="ml-2">Fixed Price</span></label>
                        <label className="flex items-center"><input type="radio" name="adjType" value="percentage" checked={adjustmentType === 'percentage'} onChange={() => setAdjustmentType('percentage')} /> <span className="ml-2">Adjust by %</span></label>
                    </div>

                    {adjustmentType === 'fixed' ? (
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Set Final Listing Price (OMR)</label>
                            <input
                                type="number"
                                value={fixedPrice}
                                onChange={(e) => setFixedPrice(e.target.value)}
                                className="w-full p-2 border border-secondary-300 rounded-lg"
                                required
                            />
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-1">Percentage Adjustment (%)</label>
                            <input
                                type="number"
                                value={percentage}
                                onChange={(e) => setPercentage(parseFloat(e.target.value))}
                                placeholder="e.g., -5 or 10"
                                className="w-full p-2 border border-secondary-300 rounded-lg"
                            />
                        </div>
                    )}
                    
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">Final Calculated Price: <span className="font-bold">{finalPrice} OMR</span></p>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium text-sm">
                            <Check size={16} /> Approve & Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyApprovalModal;
