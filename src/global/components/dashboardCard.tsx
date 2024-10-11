import { MetricsCardProps } from "../../types/components.types";

const Cards: React.FC<MetricsCardProps> = ({
  title,
  amount,
  url,
  icon: Icon,
  color,
}) => {
  return (
    <div
      className={`bg-white shadow-md p-4 rounded-lg`}
      style={{ backgroundColor: `white` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col ">
          <p className="font-bold my-2 text-xl line-clamp-1">{title}</p>
          <div className="flex gap-1">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-semibold text-gray-700">
              {amount}
            </span>
          </div>
          <a href={url} className="hover:underline text-text">
            View
          </a>
        </div>
        <div
          className="flex items-center justify-center h-16 w-16 rounded-full"
          style={{ backgroundColor: color }}
        >
          {Icon && <Icon className="text-3xl text-white" />}
        </div>
      </div>
    </div>
  );
};

export default Cards;
