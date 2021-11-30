import { useState } from "react";
import { AddCategory } from "./component/AddCategory";
import { GifGrid } from "./component/GifGrid";

export const GifExpertApp = () => {
  // Where home screen content is loaded
  const [categories, setCategories] = useState(["shingeki"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
