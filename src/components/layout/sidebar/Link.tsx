import React from "react";

export default function Link({
  children,
  title,
  arrowIcon,
  current,
  logout,
}: {
  children: React.ReactNode;
  title: string;
  arrowIcon?: boolean;
  current?: boolean;
  logout?: boolean;
}) {
  return (
    <div
      // variant="ghost"
      className={`justify-between cursor-pointer gap-2 rounded-md px-4 py-2 h-auto ${
        current
          ? "!bg-[hsla(250,48%,31%,0.1)] !text-[hsla(250,48%,31%,1)]"
          : logout
          ? "text-red-500 hover:bg-[#f2f2f2] hover:text-red-700"
          : "text-[#303030] hover:bg-[#f2f2f2] hover:text-[#303030]"
      } `}
    >
      <div className="flex text-sm items-center gap-2">
        <div className="[&>svg]:size-5">{children}</div>
        <span>{title}</span>
        {arrowIcon && (
          <div className="!flex-1 !w-full">
            <svg className="ms-auto size-4 " width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19.92L8.47997 13.4C7.70997 12.63 7.70997 11.37 8.47997 10.6L15 4.07999" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
