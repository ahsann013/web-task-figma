import { FC } from "react";

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: FC<CategoryBadgeProps> = ({ category }) => {
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case "Guest":
        return {
          bgColor: "bg-cyan-50",
          textColor: "text-cyan-700",
          dotColor: "bg-cyan-500",
        };
      case "Host":
        return {
          bgColor: "bg-orange-50",
          textColor: "text-orange-700",
          dotColor: "bg-orange-500",
        };
      default:
        return {
          bgColor: "bg-gray-50",
          textColor: "text-gray-700",
          dotColor: "bg-gray-500",
        };
    }
  };

  const config = getCategoryConfig(category);

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`}></div>
      {category}
    </div>
  );
};

export default CategoryBadge; 