import React from "react";
import Loading from "./Loading";

/*
Suspense lets you specify the loading indicator
in case some components in the tree below it are not yet ready to render.
*/
const Suspense = (Component) => (props) =>
  (
    <React.Suspense fallback={<Loading />}>
      <Component {...props} />
    </React.Suspense>
  );

export default Suspense;
