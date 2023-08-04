import React from "react";

const Layout = ({ children, classname = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${classname}`}>
      {children}
    </div>
  );
};

export default Layout;
