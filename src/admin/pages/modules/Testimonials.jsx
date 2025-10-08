import React, { useState } from 'react';
import AdminPageLayout from '../../components/AdminPageLayout';
import { testimonialsData } from '../../data/testimonials';
import Switch from '../../components/ui/Switch';
import { Edit, Trash2, Star, ArrowUp, ArrowDown } from 'lucide-react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(testimonialsData.sort((a, b) => a.order - b.order));

    const handleStatusChange = (id) => {
        setTestimonials(prev =>
            prev.map(t => t.id === id ? { ...t, status: t.status === 'active' ? 'inactive' : 'active' } : t)
        );
    };

    const handleMove = (index, direction) => {
        const newTestimonials = [...testimonials];
        const item = newTestimonials[index];
        const swapIndex = index + direction;

        if (swapIndex < 0 || swapIndex >= newTestimonials.length) return;

        newTestimonials.splice(index, 1);
        newTestimonials.splice(swapIndex, 0, item);
        
        // Update order property
        const reordered = newTestimonials.map((t, i) => ({ ...t, order: i + 1 }));

        setTestimonials(reordered);
    };

    return (
        <AdminPageLayout title="Testimonial Management" actionButton="Add Testimonial">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-secondary-50 text-left text-secondary-600">
                        <tr>
                            <th className="p-3 font-semibold">Order</th>
                            <th className="p-3 font-semibold">Tenant</th>
                            <th className="p-3 font-semibold">Testimonial</th>
                            <th className="p-3 font-semibold">Rating</th>
                            <th className="p-3 font-semibold">Status</th>
                            <th className="p-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.map((item, index) => (
                            <tr key={item.id} className="border-b border-secondary-100 last:border-0">
                                <td className="p-3">
                                    <div className="flex items-center gap-2">
                                        <span>{item.order}</span>
                                        <div className="flex flex-col">
                                            <button onClick={() => handleMove(index, -1)} disabled={index === 0} className="disabled:opacity-25"><ArrowUp size={14} /></button>
                                            <button onClick={() => handleMove(index, 1)} disabled={index === testimonials.length - 1} className="disabled:opacity-25"><ArrowDown size={14} /></button>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3">
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-xs text-secondary-500">{item.property}</p>
                                </td>
                                <td className="p-3 max-w-sm">
                                    <p className="truncate">{item.testimonial}</p>
                                </td>
                                <td className="p-3">
                                    <div className="flex items-center gap-1">
                                        {item.rating && [...Array(item.rating)].map((_, i) => <Star key={i} size={14} className="text-yellow-500 fill-current" />)}
                                    </div>
                                </td>
                                <td className="p-3">
                                    <Switch checked={item.status === 'active'} onChange={() => handleStatusChange(item.id)} />
                                </td>
                                <td className="p-3">
                                    <div className="flex gap-2">
                                        <button className="p-1.5 text-secondary-500 hover:text-primary-600"><Edit size={16} /></button>
                                        <button className="p-1.5 text-secondary-500 hover:text-red-600"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminPageLayout>
    );
};

export default Testimonials;
