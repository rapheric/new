import { CategoriesInterface } from "../../types/components.types";

const CategoryCard = ({ name, description, image }: CategoriesInterface) => {
  return (
    <div className="shadow rounded-lg flex flex-col gap-4 pb-5 w-[250px] h-[350px]">
      <img className="h-[200px] w-full object-cover rounded-t-lg" src={image} alt={name} />
      <div className="flex flex-col gap-1 px-5">
        <div className="font-bold text-xl text-stone-700 ">{name}</div>
        <p className=" text-ellipsis line-clamp-2 text-sm text-slate-600">{description}</p>

      </div>
    </div>
  );
};

export default CategoryCard;
