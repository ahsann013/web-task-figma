import { FC } from "react";
import MetricCard from "./MetricCard";

const MetricsSection: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <MetricCard
        title="Active Users"
        value="3632"
        description="Overall last month"
        changePercentage="30.5626%"
        isPositive={true}
        chartColor="blue"
      />
      <MetricCard
        title="Total Properties"
        value="10k+"
        description="Overall last month"
        changePercentage="30.5626%"
        isPositive={true}
        chartColor="red"
      />
      <MetricCard
        title="Total Revenue"
        value="$900K"
        description="Overall this month"
        changePercentage="30.5626%"
        isPositive={false}
        chartColor="green"
      />
    </div>
  );
};

export default MetricsSection; 