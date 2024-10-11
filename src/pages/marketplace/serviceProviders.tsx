import { useState } from "react";
import { ProvidersData } from "./marketData"
import ServiceProviderCard from "./serviceProvidersCard"
import Slider from "react-slick";

const ServiceProvider = () => {

    const [showAll, setShowAll] = useState(false)

    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col bg-gray-400 pt-16 ">
            <div className="max-w-7xl mx-auto py-3 w-full">
                <div className="text-center  float-end  flex items-baseline">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4  rounded"
                        onClick={handleShowAll}
                    >
                        {showAll ? "popular providers" : "See all providers"}
                    </button>
                </div>
            </div>

            <div>
                {showAll ? (
                    <div className=" grid grid-cols-4 gap-3 w-full bg-gray-400 max-w-7xl mx-auto py-8 ">
                        {ProvidersData.map((provider, index) => (
                            <div className="px-2">
                                <ServiceProviderCard
                                    key={index}
                                    name={provider.name}
                                    rating={provider.rating}
                                    logo={provider.logo}
                                />
                            </div>
                        ))
                        }

                    </div>
                ) :
                    <div className="w-full mx-auto bg-gray-400">
                        <div className=" gap-6 w-full bg-gray-400 max-w-7xl mx-auto py-8 ">
                            <Slider {...settings}>
                                {ProvidersData.map((provider, index) => (
                                    <div className="px-4">
                                        <ServiceProviderCard
                                            key={index}
                                            name={provider.name}
                                            rating={provider.rating}
                                            logo={provider.logo}
                                        />
                                    </div>
                                ))
                                }
                            </Slider>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default ServiceProvider



// import React, { useState } from "react";
// import Slider from "react-slick";
// import Card from "./Card"; // Import your Card component

// const CardCarousel: React.FC = () => {
//   const [showAll, setShowAll] = useState(false);

//   const data = [
//     { title: "Card 1", description: "This is card 1" },
//     { title: "Card 2", description: "This is card 2" },
//     { title: "Card 3", description: "This is card 3" },
//     { title: "Card 4", description: "This is card 4" },
//     // Add more cards as needed
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, // Number of cards visible at a time
//     slidesToScroll: 1,
//     autoplay: true,  // Enable autoplay
//     autoplaySpeed: 3000,  // Speed in milliseconds (3000ms = 3 seconds)
//     responsive: [
//       {
//         breakpoint: 1024, // Tailwind’s lg breakpoint
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 640, // Tailwind’s sm breakpoint
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Toggle button click event to show all cards or carousel
//   const handleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       {/* Button to toggle between carousel and showing all cards */}
//       <div className="text-center mb-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleShowAll}
//         >
//           {showAll ? "Show Less" : "Show All Cards"}
//         </button>
//       </div>

//       {/* Conditionally rendering the carousel or all cards */}
//       {!showAll ? (
//         <Slider {...settings}>
//           {data.map((item, index) => (
//             <div key={index} className="px-2">
//               <Card title={item.title} description={item.description} />
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {data.map((item, index) => (
//             <div key={index} className="px-2">
//               <Card title={item.title} description={item.description} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardCarousel;
