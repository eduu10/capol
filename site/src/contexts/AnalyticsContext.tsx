'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { calculateDashboardData } from '@/lib/analytics';

interface VisitorData {
  todayVisitors: number;
  todayTrend: number;
  monthVisitors: number;
  totalPages: number;
  avgTime: string;
  budgetRequests: number;
  realtimeVisitors: number;
  dailyVisitors: { date: string; count: number }[];
  topPages: { page: string; views: number }[];
  deviceStats: { device: string; percentage: number; color: string }[];
  activePages: { page: string; visitors: number }[];
  recentVisits: {
    id: number;
    timestamp: string;
    page: string;
    city: string;
    device: string;
    browser: string;
  }[];
}

interface AnalyticsContextType {
  data: VisitorData;
  refresh: () => void;
}

const emptyData: VisitorData = {
  todayVisitors: 0,
  todayTrend: 0,
  monthVisitors: 0,
  totalPages: 0,
  avgTime: '0:00',
  budgetRequests: 0,
  realtimeVisitors: 0,
  dailyVisitors: [],
  topPages: [],
  deviceStats: [
    { device: 'Desktop', percentage: 0, color: '#2e7d32' },
    { device: 'Mobile', percentage: 0, color: '#f57c00' },
    { device: 'Tablet', percentage: 0, color: '#1b2a4a' },
  ],
  activePages: [],
  recentVisits: [],
};

const AnalyticsContext = createContext<AnalyticsContextType>({
  data: emptyData,
  refresh: () => {},
});

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<VisitorData>(emptyData);

  const refresh = useCallback(() => {
    try {
      const calculated = calculateDashboardData();
      setData(calculated);
    } catch {
      // Keep current data on error
    }
  }, []);

  // Initial load
  useEffect(() => {
    refresh();
  }, [refresh]);

  // Auto-refresh every 5 seconds for real-time feel
  useEffect(() => {
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <AnalyticsContext.Provider value={{ data, refresh }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  return useContext(AnalyticsContext);
}
