import type { FC } from "react"
import { ChevronDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description: string
  changePercentage: string
  isPositive: boolean
  chartColor: "blue" | "red" | "green"
}

const MetricCard: FC<MetricCardProps> = ({ title, value, description, changePercentage, isPositive, chartColor }) => {
  const getChartImage = () => {
    switch (chartColor) {
      case "blue":
        return <img src="/blue.svg" alt="" className="w-full h-40 object-contain" />
      case "red":
        return <img src="/red.svg" alt="" className="w-full h-40 object-contain" />
      case "green":
        return <img src="/green.svg" alt="" className="w-full h-40 object-contain" />
      default:
        return <div className="h-20 bg-gray-100 rounded-md border border-[#eaecf0]"></div>
    }
  }

  return (
    <div className="bg-white rounded-lg border border-[#eaecf0] p-6 h-48">
      {/* Header with dropdown and percentage */}
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-1 text-sm text-[#667085] border border-[#d0d5dd] rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
          <span>Last Month</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <div
          className={`flex items-center gap-1 ${isPositive ? "text-emerald-600" : "text-red-600"} text-sm font-medium`}
        >
          <span className="text-lg">{isPositive ? "↗" : "↘"}</span>
          <span>{changePercentage}</span>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex items-center gap-6 h-24">
        {/* Left side - Text content */}
        <div className="flex-1 min-w-0">
          <div className="text-base font-medium text-[#344054] mb-1">{title}</div>
          <div className="text-3xl font-bold text-[#101828] mb-1">{value}</div>
          <div className="text-sm text-[#667085]">{description}</div>
        </div>

        {/* Right side - Chart */}
        <div className="flex-shrink-0 w-64">{getChartImage()}</div>
      </div>
    </div>
  )
}

export default MetricCard
