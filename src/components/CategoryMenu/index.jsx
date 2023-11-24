
// import React from "react";

// const CategoryMenu = () => {
//   // Assuming categories is an array of category objects
//   const categories = ["Music", "Sports", "Food & Drink", "Tech", "Arts"];

//   return (
//     <div className="mt-8">
//       <div className="container mx-auto flex space-x-4 overflow-x-auto">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300"
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryMenu;

import React from "react";

const CategoryMenu = () => {
  const categories = ["Music", "Sports", "Food & Drink", "Tech", "Arts"];

  return (
    <div className="mt-8">
      <div className="container mx-auto flex space-x-4 overflow-x-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition-colors"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
