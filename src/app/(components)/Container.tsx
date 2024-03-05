"use client";

import { ReactNode, useEffect, useRef } from "react";

export interface Children {
  children: ReactNode;
}

const Container = ({ children }: Children) => {
  const rendersNo = useRef(1);
  useEffect(() => {
    rendersNo.current = rendersNo.current + 1;
  });
  return (
    <div className="border-2 border-cyan-700 m-2 p-2">
      <p className="text-slate-600">Rendered: {rendersNo.current}</p>
      <hr />
      {children}
    </div>
  );
};
export default Container;
