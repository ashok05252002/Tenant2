import React, { useState } from 'react';
import CustomerLayout from '../components/CustomerLayout';
import AgentCard from '../components/agents/AgentCard';
import { mockAgents } from '../data/agents';
import { List, Grid, ArrowDownUp, Search, SlidersHorizontal } from 'lucide-react';

const AgentsDirectory = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <CustomerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 mb-8">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Find a Real Estate Agent</h1>
          <div className="flex gap-2 p-2 bg-secondary-100 rounded-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, location, or specialization..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                    <SlidersHorizontal size={20} className="text-primary-600" />
                    <h3 className="text-lg font-semibold text-secondary-900">Filters</h3>
                </div>
                {/* Filters content here */}
                <p className="text-sm text-secondary-500">Agent filters coming soon.</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-secondary-700">Showing <span className="font-bold">{mockAgents.length}</span> agents</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ArrowDownUp size={16} className="text-secondary-500" />
                  <select className="border-none bg-transparent text-sm text-secondary-700 focus:ring-0">
                    <option>Sort by: Highest Rated</option>
                    <option>Most Listings</option>
                    <option>Most Experienced</option>
                  </select>
                </div>
                <div className="flex items-center gap-1 p-1 bg-secondary-200 rounded-lg">
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}><Grid size={18} /></button>
                  <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}><List size={18} /></button>
                </div>
              </div>
            </div>

            {/* Agent List/Grid */}
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {mockAgents.map(agent => (
                <AgentCard key={agent.id} agent={agent} viewMode={viewMode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default AgentsDirectory;
