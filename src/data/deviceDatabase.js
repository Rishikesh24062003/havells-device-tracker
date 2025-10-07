import { Lightbulb, ThermometerSun, Fan } from 'lucide-react';

export const deviceDatabase = {
  'HVL-LIGHT-001': {
    name: 'Havells Smart LED Bulb Pro',
    type: 'Lighting',
    icon: Lightbulb,
    health: {
      status: 'Excellent',
      score: 95,
      lastMaintenance: '2025-09-15',
      connectivity: 98,
      performance: 94,
      powerEfficiency: 96
    },
    firmware: {
      current: 'v2.4.1',
      latest: 'v2.5.0',
      updateAvailable: true
    },
    features: {
      current: ['Voice Control', 'Schedule Timer', 'Color Temperature', 'Dimming'],
      upcoming: [
        { name: 'Adaptive Brightness', eta: 'Nov 2025', description: 'Auto-adjust based on ambient light' },
        { name: 'Scene Modes', eta: 'Dec 2025', description: 'Pre-configured lighting scenes' },
        { name: 'Energy History', eta: 'Jan 2026', description: 'Detailed consumption tracking' }
      ]
    },
    analytics: {
      dailyUsage: 6.5,
      monthlyKwh: 12.4,
      costSavings: 340,
      co2Reduced: 45,
      avgOnTime: '6h 30m',
      peakUsageTime: '18:00 - 22:00'
    },
    tips: [
      'Schedule auto-off during daylight hours to save 15% more energy',
      'Update to latest firmware for improved stability',
      'Use warm white (2700K) in evenings for better sleep quality'
    ]
  },
  'HVL-FAN-002': {
    name: 'Havells Smart Ceiling Fan',
    type: 'Cooling',
    icon: Fan,
    health: {
      status: 'Good',
      score: 88,
      lastMaintenance: '2025-08-20',
      connectivity: 95,
      performance: 85,
      powerEfficiency: 90
    },
    firmware: {
      current: 'v1.8.2',
      latest: 'v1.8.2',
      updateAvailable: false
    },
    features: {
      current: ['Remote Control', 'Speed Control', 'Timer', 'Reverse Mode'],
      upcoming: [
        { name: 'Sleep Mode', eta: 'Oct 2025', description: 'Gradual speed reduction overnight' },
        { name: 'Temperature Sensing', eta: 'Nov 2025', description: 'Auto-adjust speed based on room temp' },
        { name: 'Air Quality Alerts', eta: 'Jan 2026', description: 'Notify when ventilation needed' }
      ]
    },
    analytics: {
      dailyUsage: 8.2,
      monthlyKwh: 18.6,
      costSavings: 280,
      co2Reduced: 38,
      avgOnTime: '8h 15m',
      peakUsageTime: '12:00 - 16:00'
    },
    tips: [
      'Clean blades monthly to maintain 100% efficiency',
      'Use reverse mode in winter to circulate warm air',
      'Running at speed 3-4 is most energy efficient'
    ]
  },
  'HVL-THERM-003': {
    name: 'Havells Smart Water Heater',
    type: 'Heating',
    icon: ThermometerSun,
    health: {
      status: 'Needs Attention',
      score: 72,
      lastMaintenance: '2025-06-10',
      connectivity: 92,
      performance: 68,
      powerEfficiency: 75
    },
    firmware: {
      current: 'v3.1.0',
      latest: 'v3.2.1',
      updateAvailable: true
    },
    features: {
      current: ['Temperature Control', 'Schedule Heating', 'Safety Cut-off', 'Power Saving Mode'],
      upcoming: [
        { name: 'Smart Heating', eta: 'Oct 2025', description: 'Learn usage patterns for pre-heating' },
        { name: 'Vacation Mode', eta: 'Nov 2025', description: 'Ultra-low power when away' },
        { name: 'Maintenance Alerts', eta: 'Dec 2025', description: 'Predict servicing needs' }
      ]
    },
    analytics: {
      dailyUsage: 3.5,
      monthlyKwh: 65.8,
      costSavings: 150,
      co2Reduced: 28,
      avgOnTime: '3h 30m',
      peakUsageTime: '06:00 - 08:00'
    },
    tips: [
      'URGENT: Schedule maintenance - last service was 4 months ago',
      'Reduce temperature to 55°C to save 20% energy',
      'Update firmware for improved energy management'
    ]
  }
};
