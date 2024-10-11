import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface FullInputType {
  title: string;
  value: number | string;
  callBack: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
}

export interface ButtonInterface {
  bgColor: string;
  width: string;
  title: string;
  textColor: string;
  callBack: () => void;
  icon: ReactElement;
}
export interface CheckboxInterface {
  title: string;
}

export interface CategoryCardInterface {
  name: string;
  description: string;
  image: string;
}

export interface ProductListInterface {
  products: CategoryCardInterface[];
}

export interface ServiceProviderInterface {
  image: string;
  name: string;
  description: string;
}

export interface ServiceProvidersListInterface {
  sp: ServiceProviderInterface[];
}

export interface CategoriesInterface {
  image: string;
  name: string;
  description: string;
}

export interface CategoriesListInterface {
  cat: CategoriesInterface[];
}

// LANDING PAGE

export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

// dashboard
export interface MetricsCardProps {
  title?: string;
  text?: string;
  amount?: string | number;
  url?: string;
  icon?: IconType;
  color?: string;
}
