import { FC } from "react";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Completed":
        return {
          bgColor: "bg-emerald-50",
          textColor: "text-emerald-700",
          dotColor: "bg-emerald-500",
        };
      case "In Progress":
        return {
          bgColor: "bg-orange-50",
          textColor: "text-orange-700",
          dotColor: "bg-orange-500",
        };
      case "Cancelled":
        return {
          bgColor: "bg-red-50",
          textColor: "text-red-700",
          dotColor: "bg-red-500",
        };
      default:
        return {
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
          dotColor: "bg-gray-500",
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></div>
      {status}
    </div>
  );
};

export default StatusBadge; 