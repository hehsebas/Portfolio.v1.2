"use client";
interface ContainerProps {
  children: React.ReactNode;
}
function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pt-0 md:px-6">
      {children}
    </div>
  );
}
export default Container;
