import { IComponent } from "@shared/Component/types";

const Component: React.FC<IComponent> = ({ children }) => {
  return <div className="flex-1 bg-slate-600 flex-col rounded-sm">{children}</div>;
};

export { Component };
