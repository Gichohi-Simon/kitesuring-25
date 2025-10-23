export type CardData = {
  id: number;
  title: string;
  bg_img: string;
  package_name: string;
  description: string;
  explainer: {
    title: string;
    details: string[];
  };
};
