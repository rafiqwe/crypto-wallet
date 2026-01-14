import React from "react";

const loading = () => {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-dashed rounded-full animate-spin border-orange-500"></div>
      </div>
    </div>
  );
};

export default loading;
