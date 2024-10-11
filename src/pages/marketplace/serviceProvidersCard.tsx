import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface ServiceProviderProps {
  logo: string;
  name: string;
  rating: number;
}

const ServiceProviderCard: React.FC<ServiceProviderProps> = ({
  logo,
  name,
  rating,
}) => {
  const handleCardClick = () => {
    console.log(`Navigating to ${name} details page...`);
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <BsStarFill key={index} className="text-yellow-500" />
        ))}
        {halfStar && <BsStarHalf className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <BsStar key={index} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div
      className="border rounded-lg shadow-lg mb-6 flex flex-col items-center justify-center p-4 hover:shadow-2xl bg-white cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-center justify-center">
        <img
          src={logo}
          alt={name}
          className="w-[8rem] h-[8rem] object-cover mb-4 rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
      <p className="text-sm my-2 text-center text-gray-600 line-clamp-2">
        Offering top-notch logistics solutions, {name} specializes in global
        trade facilitation and ensures your goods are delivered securely and on
        time.
      </p>

      <div className="flex items-center justify-center gap-2 mt-4">
        {renderStars()}
        <span className="text-sm text-gray-600">({rating})</span>
      </div>
    </div>
  );
};

export default ServiceProviderCard;
