import React, { useState, useMemo } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { mockTenants } from '../../data/users';
import { mockInvoices } from '../../data/invoices';
import { User, Search, DollarSign, Plus, Trash2, Printer, Check } from 'lucide-react';

const CreateBill = () => {
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [lineItems, setLineItems] = useState([{ description: 'Monthly Rent', amount: '' }]);

    const filteredTenants = useMemo(() => {
        if (!searchTerm) return [];
        return mockTenants.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    const tenantBalance = useMemo(() => {
        if (!selectedTenant) return 0;
        return mockInvoices
            .filter(inv => inv.tenantName === selectedTenant.name && inv.status !== 'Paid')
            .reduce((sum, inv) => sum + inv.amount, 0);
    }, [selectedTenant]);
    
    const handleSelectTenant = (tenant) => {
        setSelectedTenant(tenant);
        setSearchTerm('');
        const rent = mockInvoices.find(inv => inv.tenantName === tenant.name)?.amount || 0;
        setLineItems([{ description: 'Monthly Rent', amount: rent }]);
    };

    const handleLineItemChange = (index, field, value) => {
        const newLineItems = [...lineItems];
        newLineItems[index][field] = value;
        setLineItems(newLineItems);
    };

    const addLineItem = () => {
        setLineItems([...lineItems, { description: '', amount: '' }]);
    };

    const removeLineItem = (index) => {
        setLineItems(lineItems.filter((_, i) => i !== index));
    };

    const totalAmount = useMemo(() => {
        return lineItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    }, [lineItems]);

    const handlePrint = () => {
        window.print();
    };

    return (
        <AdminPageLayout title="Create Bill">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border">
                    <div className="space-y-6">
                        {/* Select Tenant */}
                        <div>
                            <label className="block text-sm font-medium text-secondary-700 mb-2">1. Select Tenant</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for a tenant..."
                                    className="w-full pl-10 p-3 border border-secondary-300 rounded-lg"
                                />
                                {searchTerm && filteredTenants.length > 0 && (
                                    <ul className="absolute z-10 w-full bg-white border mt-1 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                        {filteredTenants.map(t => (
                                            <li key={t.id} onClick={() => handleSelectTenant(t)} className="p-3 hover:bg-secondary-50 cursor-pointer">{t.name}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Line Items */}
                        {selectedTenant && (
                            <div>
                                <label className="block text-sm font-medium text-secondary-700 mb-2">2. Bill Line Items</label>
                                <div className="space-y-2">
                                    {lineItems.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <input type="text" value={item.description} onChange={(e) => handleLineItemChange(index, 'description', e.target.value)} placeholder="Description" className="flex-grow p-2 border rounded-lg" />
                                            <input type="number" value={item.amount} onChange={(e) => handleLineItemChange(index, 'amount', e.target.value)} placeholder="Amount" className="w-32 p-2 border rounded-lg" />
                                            <button onClick={() => removeLineItem(index)} className="p-2 text-red-500 hover:bg-red-100 rounded-lg"><Trash2 size={18} /></button>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={addLineItem} className="mt-2 text-sm text-primary-600 flex items-center gap-1"><Plus size={14} /> Add Item</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bill Preview */}
                <div className="lg:col-span-1">
                    <div id="bill-preview" className="bg-white p-6 rounded-xl shadow-sm border print-area">
                        <h3 className="text-xl font-bold text-center mb-4">INVOICE</h3>
                        <div className="flex justify-between text-sm mb-4 pb-4 border-b">
                            <div>
                                <p className="font-semibold">Al Dahab Investments</p>
                                <p>Muscat, Oman</p>
                            </div>
                            <div>
                                <p><strong>Bill to:</strong> {selectedTenant?.name || 'Select a Tenant'}</p>
                                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <table className="w-full text-sm mb-4">
                            <thead><tr className="border-b"><th className="text-left py-1">Description</th><th className="text-right py-1">Amount</th></tr></thead>
                            <tbody>
                                {lineItems.map((item, i) => (
                                    <tr key={i}><td className="py-1">{item.description}</td><td className="text-right">{parseFloat(item.amount || 0).toFixed(2)}</td></tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-end pt-4 border-t">
                            <p className="font-bold">Total: {totalAmount.toFixed(2)} OMR</p>
                        </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                        <button onClick={handlePrint} className="flex-1 flex items-center justify-center gap-2 py-2 bg-secondary-200 rounded-lg"><Printer size={16} /> Print Bill</button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-green-500 text-white rounded-lg"><Check size={16} /> Finalize & Send</button>
                    </div>
                </div>
            </div>
            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    .print-area, .print-area * { visibility: visible; }
                    .print-area { position: absolute; left: 0; top: 0; width: 100%; }
                }
            `}</style>
        </AdminPageLayout>
    );
};

export default CreateBill;
