import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  BatteryFull, 
  BatteryLow,  
  Leaf, 
  Factory, 
  Award, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3,  
  Calendar, 
  Users,
  Zap,
  Droplets
} from 'lucide-react';

const BatteryTechDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for charts
  const batteryPerformanceData = [
    { month: 'Jan', capacity: 85, efficiency: 78, chargeCycles: 230 },
    { month: 'Feb', capacity: 88, efficiency: 81, chargeCycles: 245 },
    { month: 'Mar', capacity: 86, efficiency: 80, chargeCycles: 260 },
    { month: 'Apr', capacity: 90, efficiency: 82, chargeCycles: 270 },
    { month: 'May', capacity: 91, efficiency: 84, chargeCycles: 285 },
    { month: 'Jun', capacity: 93, efficiency: 86, chargeCycles: 300 },
    { month: 'Jul', capacity: 94, efficiency: 88, chargeCycles: 320 },
    { month: 'Aug', capacity: 95, efficiency: 89, chargeCycles: 340 },
  ];

  const carbonOffsetData = [
    { month: 'Jan', offset: 1200 },
    { month: 'Feb', offset: 1450 },
    { month: 'Mar', offset: 1800 },
    { month: 'Apr', offset: 2100 },
    { month: 'May', offset: 2400 },
    { month: 'Jun', offset: 2800 },
    { month: 'Jul', offset: 3200 },
    { month: 'Aug', offset: 3600 },
  ];
  
  const materialUsageData = [
    { name: 'Lithium', value: 35 },
    { name: 'Cobalt', value: 20 },
    { name: 'Nickel', value: 25 },
    { name: 'Manganese', value: 15 },
    { name: 'Other', value: 5 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const productionData = [
    { month: 'Jan', actual: 850, target: 900 },
    { month: 'Feb', actual: 900, target: 950 },
    { month: 'Mar', actual: 950, target: 1000 },
    { month: 'Apr', actual: 1000, target: 1050 },
    { month: 'May', actual: 1100, target: 1100 },
    { month: 'Jun', actual: 1200, target: 1150 },
    { month: 'Jul', actual: 1250, target: 1200 },
    { month: 'Aug', actual: 1300, target: 1250 },
  ];

  const resourceConsumptionData = [
    { month: 'Jan', water: 180, energy: 250 },
    { month: 'Feb', water: 175, energy: 245 },
    { month: 'Mar', water: 170, energy: 240 },
    { month: 'Apr', water: 172, energy: 238 },
    { month: 'May', water: 168, energy: 235 },
    { month: 'Jun', water: 165, energy: 230 },
    { month: 'Jul', water: 160, energy: 225 },
    { month: 'Aug', water: 155, energy: 220 },
  ];

  // KPI cards data
  const kpiCards = [
    { 
      title: 'Battery Efficiency', 
      value: '89%', 
      change: '+1.2%', 
      icon: <BatteryFull className="w-8 h-8" />, 
      positive: true 
    },
    { 
      title: 'Carbon Offset', 
      value: '3,600 tons', 
      change: '+400', 
      icon: <Leaf className="w-8 h-8" />, 
      positive: true 
    },
    { 
      title: 'Production Rate', 
      value: '1,300 units', 
      change: '+50', 
      icon: <Factory className="w-8 h-8" />, 
      positive: true 
    },
    { 
      title: 'Energy Usage', 
      value: '220 kWh', 
      change: '-5', 
      icon: <Zap className="w-8 h-8" />, 
      positive: true 
    },
    { 
      title: 'Water Consumption', 
      value: '155 kL', 
      change: '-5', 
      icon: <Droplets className="w-8 h-8" />, 
      positive: true 
    },
    { 
      title: 'Quality Rating', 
      value: '4.8/5', 
      change: '+0.1', 
      icon: <Award className="w-8 h-8" />, 
      positive: true 
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Battery Technology Dashboard",
    "description": "Real-time monitoring of battery performance metrics and sustainability impact",
    "author": {
      "@type": "Organization",
      "name": "Fermi Energy",
      "url": "https://www.fermienergy.com"
    },
    "datePublished": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Fermi Energy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fermienergy.com/img/LOGO.png"
      }
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Battery Technology Dashboard</h1>
            
            {/* Tabs */}
            <div className="flex space-x-4 bg-gray-700 p-1 rounded-lg">
              <button 
                className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-primary text-black' : 'bg-transparent'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeTab === 'production' ? 'bg-primary text-black' : 'bg-transparent'}`}
                onClick={() => setActiveTab('production')}
              >
                Production
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${activeTab === 'sustainability' ? 'bg-primary text-black' : 'bg-transparent'}`}
                onClick={() => setActiveTab('sustainability')}
              >
                Sustainability
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {kpiCards.map((card, index) => (
                  <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold text-gray-300">{card.title}</h2>
                      <div className="text-primary bg-primary/10 p-2 rounded-full">
                        {card.icon}
                      </div>
                    </div>
                    <p className="text-3xl font-bold mb-2">{card.value}</p>
                    <p className={`flex items-center ${card.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {card.positive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 transform rotate-180" />}
                      {card.change} from last month
                    </p>
                  </div>
                ))}
              </div>

              {/* Main Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Battery Performance Chart */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <BatteryFull className="mr-2 w-6 h-6" /> Battery Performance Metrics
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={batteryPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="capacity" stroke="#ffca28" name="Capacity %" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="efficiency" stroke="#4ade80" name="Efficiency %" />
                        <Line type="monotone" dataKey="chargeCycles" stroke="#38bdf8" name="Charge Cycles" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Carbon Offset Chart */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Leaf className="mr-2 w-6 h-6" /> Carbon Offset (tons)
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={carbonOffsetData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="offset" stroke="#4ade80" fill="#4ade80" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Secondary Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Production Chart */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Factory className="mr-2 w-6 h-6" /> Production vs Target
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={productionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Bar dataKey="actual" fill="#38bdf8" name="Actual Production" />
                        <Bar dataKey="target" fill="#fb923c" name="Target Production" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Materials Chart */}
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart3 className="mr-2 w-6 h-6" /> Material Composition
                  </h2>
                  <div className="h-80 flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={materialUsageData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {materialUsageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Production Tab */}
          {activeTab === 'production' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Factory className="mr-2 w-6 h-6" /> Monthly Production
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={productionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Bar dataKey="actual" fill="#38bdf8" name="Actual Production" />
                        <Bar dataKey="target" fill="#fb923c" name="Target Production" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Zap className="mr-2 w-6 h-6" /> Resource Consumption
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={resourceConsumptionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="water" stroke="#38bdf8" name="Water (kL)" />
                        <Line type="monotone" dataKey="energy" stroke="#fb923c" name="Energy (kWh)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg col-span-1">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="mr-2 w-6 h-6" /> Production Alerts
                  </h2>
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/40 rounded-lg">
                      <p className="font-medium text-yellow-400">Low lithium supply expected next month</p>
                    </div>
                    <div className="p-3 bg-green-500/10 border border-green-500/40 rounded-lg">
                      <p className="font-medium text-green-400">Quality testing passed for all August batches</p>
                    </div>
                    <div className="p-3 bg-blue-500/10 border border-blue-500/40 rounded-lg">
                      <p className="font-medium text-blue-400">New efficiency process implemented</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-lg col-span-2">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-2 w-6 h-6" /> Production Schedule
                  </h2>
                  <table className="min-w-full divide-y divide-gray-600">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Batch</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Start Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">End Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-600">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">BT-2025-001</td>
                        <td className="px-6 py-4 whitespace-nowrap">Apr 15, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">Apr 22, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full">Completed</span></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">BT-2025-002</td>
                        <td className="px-6 py-4 whitespace-nowrap">Apr 23, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">Apr 30, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">In Progress</span></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">BT-2025-003</td>
                        <td className="px-6 py-4 whitespace-nowrap">May 1, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">May 8, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full">Scheduled</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Sustainability Tab */}
          {activeTab === 'sustainability' && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Leaf className="mr-2 w-6 h-6" /> Carbon Offset Growth
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={carbonOffsetData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="offset" stroke="#4ade80" fill="#4ade80" fillOpacity={0.3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Droplets className="mr-2 w-6 h-6" /> Resource Efficiency
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={resourceConsumptionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                        <XAxis dataKey="month" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="water" stroke="#38bdf8" name="Water (kL)" />
                        <Line type="monotone" dataKey="energy" stroke="#fb923c" name="Energy (kWh)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <BarChart3 className="mr-2 w-6 h-6" /> Recycled vs. New Materials
                  </h2>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Recycled Materials', value: 65 },
                            { name: 'New Materials', value: 35 }
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          <Cell fill="#4ade80" />
                          <Cell fill="#fb923c" />
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#333', border: 'none', borderRadius: '4px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="mr-2 w-6 h-6" /> Sustainability Initiatives
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <h3 className="font-bold text-green-400 mb-2">Solar Panel Installation</h3>
                      <p className="text-gray-300">100% of factory power now sourced from renewable energy</p>
                      <div className="mt-2 w-full h-2 bg-gray-600 rounded-full">
                        <div className="h-full bg-green-400 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <h3 className="font-bold text-blue-400 mb-2">Water Recycling System</h3>
                      <p className="text-gray-300">Recycles 80% of water used in manufacturing processes</p>
                      <div className="mt-2 w-full h-2 bg-gray-600 rounded-full">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <h3 className="font-bold text-yellow-400 mb-2">Battery Recycling Program</h3>
                      <p className="text-gray-300">65% of materials recovered from end-of-life batteries</p>
                      <div className="mt-2 w-full h-2 bg-gray-600 rounded-full">
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BatteryTechDashboard;