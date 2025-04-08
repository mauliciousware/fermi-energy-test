import React from 'react';
import Layout from "@theme/Layout";
import BatteryTechDashboard from "../components/BatteryTechDashboard";

export default function Dashboard(): JSX.Element {
  return (
    <Layout
      title="Battery Technology Dashboard"
      description="Monitor your battery technology metrics and sustainability impact"
    >
      <BatteryTechDashboard />
    </Layout>
  );
}