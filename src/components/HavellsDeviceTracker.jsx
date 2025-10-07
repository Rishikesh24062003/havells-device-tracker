import React, { useState } from 'react';
import { Camera, Wifi, Battery, Zap, TrendingUp, AlertCircle, CheckCircle, Clock, Lightbulb, Shield } from 'lucide-react';
import { deviceDatabase } from '../data/deviceDatabase';

const HavellsDeviceTracker = () => {
  const [scanning, setScanning] = useState(false);
  const [device, setDevice] = useState(null);
  const [selectedTab, setSelectedTab] = useState('health');
  const [manualCode, setManualCode] = useState('');

  const simulateScan = () => {
    setScanning(true);
    setTimeout(() => {
      const codes = Object.keys(deviceDatabase);
      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      setDevice(deviceDatabase[randomCode]);
      setScanning(false);
      setSelectedTab('health');
    }, 2000);
  };

  const handleManualEntry = () => {
    const foundDevice = deviceDatabase[manualCode.toUpperCase()];
    if (foundDevice) {
      setDevice(foundDevice);
      setSelectedTab('health');
      setManualCode('');
    } else {
      alert('Device not found. Try: HVL-LIGHT-001, HVL-FAN-002, or HVL-THERM-003');
    }
  };

  const getHealthColor = (score) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 75) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getHealthStatus = (score) => {
    if (score >= 90) return { text: 'Excellent', color: 'bg-green-500' };
    if (score >= 75) return { text: 'Good', color: 'bg-yellow-500' };
    return { text: 'Needs Attention', color: 'bg-red-500' };
  };

  if (!device) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-12 h-12 text-white" />
              <h1 className="text-4xl font-bold text-white">Havells</h1>
            </div>
            <p className="text-blue-200 text-lg">Smart Device Health Tracker</p>
          </div>

          {/* Scan Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Scan Device QR Code</h2>
              <p className="text-gray-600">Get instant health status and insights</p>
            </div>

            {/* Scanner Animation */}
            <div className="relative mb-8">
              <div className={`w-48 h-48 mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center ${scanning ? 'animate-pulse' : ''}`}>
                {scanning ? (
                  <div className="relative">
                    <Camera className="w-24 h-24 text-blue-600 animate-bounce" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                ) : (
                  <Camera className="w-24 h-24 text-blue-600" />
                )}
              </div>
            </div>

            <button
              onClick={simulateScan}
              disabled={scanning}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              {scanning ? 'Scanning...' : 'Start QR Scan'}
            </button>

            {/* Manual Entry */}
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 text-center mb-3">Or enter device code manually</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., HVL-LIGHT-001"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleManualEntry}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Go
                </button>
              </div>
            </div>
          </div>

          {/* Demo Devices */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white text-sm text-center mb-2">Demo Device Codes:</p>
            <div className="space-y-1">
              {Object.keys(deviceDatabase).map(code => (
                <p key={code} className="text-blue-200 text-xs text-center font-mono">{code}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const DeviceIcon = device.icon;
  const healthStatus = getHealthStatus(device.health.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setDevice(null)}
            className="text-white hover:text-blue-200 transition-colors"
          >
            ← Back to Scan
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-white" />
            <span className="text-white font-bold text-xl">Havells</span>
          </div>
        </div>

        {/* Device Header Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <DeviceIcon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{device.name}</h2>
                <p className="text-gray-600">{device.type}</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${healthStatus.color} rounded-full`}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">{healthStatus.text}</span>
              </div>
              <p className={`text-4xl font-bold mt-2 ${getHealthColor(device.health.score)}`}>
                {device.health.score}%
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b">
            {['health', 'features', 'analytics', 'tips'].map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-all ${
                  selectedTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          {selectedTab === 'health' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Device Health Status</h3>
              
              {/* Health Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <Wifi className="w-8 h-8 text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">Connectivity</p>
                  <p className="text-2xl font-bold text-gray-800">{device.health.connectivity}%</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
                  <Zap className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Performance</p>
                  <p className="text-2xl font-bold text-gray-800">{device.health.performance}%</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                  <Battery className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Efficiency</p>
                  <p className="text-2xl font-bold text-gray-800">{device.health.powerEfficiency}%</p>
                </div>
              </div>

              {/* Firmware Status */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Firmware Version</p>
                    <p className="text-lg font-bold text-gray-800">{device.firmware.current}</p>
                  </div>
                  {device.firmware.updateAvailable ? (
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-1">
                        Update Available
                      </span>
                      <p className="text-sm text-gray-600">{device.firmware.latest}</p>
                    </div>
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  )}
                </div>
              </div>

              {/* Last Maintenance */}
              <div className="bg-gray-50 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-600">Last Maintenance</p>
                    <p className="text-lg font-semibold text-gray-800">{device.health.lastMaintenance}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Current Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {device.features.current.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Features</h3>
                <div className="space-y-3">
                  {device.features.upcoming.map((feature, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-gray-800">{feature.name}</h4>
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">
                          {feature.eta}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Usage Analytics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-sm text-gray-600">Daily Usage</p>
                  <p className="text-2xl font-bold text-gray-800">{device.analytics.dailyUsage}h</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                  <Zap className="w-8 h-8 text-purple-600 mb-2" />
                  <p className="text-sm text-gray-600">Monthly Consumption</p>
                  <p className="text-2xl font-bold text-gray-800">{device.analytics.monthlyKwh} kWh</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">Cost Savings</p>
                  <p className="text-2xl font-bold text-green-600">₹{device.analytics.costSavings}</p>
                  <p className="text-xs text-gray-500">vs traditional devices</p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">CO₂ Reduced</p>
                  <p className="text-2xl font-bold text-teal-600">{device.analytics.co2Reduced} kg</p>
                  <p className="text-xs text-gray-500">this year</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3">Usage Pattern</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average ON Time</span>
                    <span className="font-bold text-gray-800">{device.analytics.avgOnTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peak Usage</span>
                    <span className="font-bold text-gray-800">{device.analytics.peakUsageTime}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'tips' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Optimization Tips</h3>
              {device.tips.map((tip, idx) => (
                <div key={idx} className={`p-4 rounded-xl flex items-start gap-3 ${
                  tip.includes('URGENT') 
                    ? 'bg-red-50 border border-red-200' 
                    : 'bg-blue-50 border border-blue-200'
                }`}>
                  {tip.includes('URGENT') ? (
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HavellsDeviceTracker;
