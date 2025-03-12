import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

export default function SubHeader() {
  return (
    <div>
      <span className="text-gray-900 text-sm">الرئيسية</span>
      <div className="flex flex-col md:flex-row justify-between md:items-center pt-5 gap-4">
        <div className="flex flex-col space-y-3">
          <h2 className="text-lg md:text-xl font-bold lg:text-[32px]">لوحة التحكم</h2>
          <span className="text-gray-500 text-sm">نظرة عامة على النظام وتفاصيله</span>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-x-2">
            <Label className="md:text-lg" htmlFor="airplane-mode">تحليل عام</Label>
            <Switch defaultChecked={true} dir="ltr" id="airplane-mode" />
          </div>
          <div className="flex items-center gap-x-2 p-2 text-gray-500 text-sm !bg-white rounded-full">
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 1.16667V2.33334M3.5 1.16667V2.33334" stroke="#636A71" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.45834 7.14187C1.45834 4.60013 1.45834 3.32925 2.18875 2.53962C2.91915 1.75 4.09471 1.75 6.44584 1.75H7.55418C9.9053 1.75 11.0809 1.75 11.8113 2.53962C12.5417 3.32925 12.5417 4.60013 12.5417 7.14187V7.44147C12.5417 9.98322 12.5417 11.2541 11.8113 12.0437C11.0809 12.8333 9.9053 12.8333 7.55418 12.8333H6.44584C4.09471 12.8333 2.91915 12.8333 2.18875 12.0437C1.45834 11.2541 1.45834 9.98322 1.45834 7.44147V7.14187Z" stroke="#636A71" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.75 4.66667H12.25" stroke="#636A71" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            التاريخ
          </div>
          <div className="flex items-center gap-x-2 p-2 text-gray-500 text-sm !bg-white rounded-full">
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6492 5.83333H2.31583V10.5C2.31583 12.25 2.89916 12.8333 4.64916 12.8333H9.31583C11.0658 12.8333 11.6492 12.25 11.6492 10.5V5.83333Z" stroke="#636A71" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5417 4.08334V4.66667C12.5417 5.30834 12.2325 5.83334 11.375 5.83334H2.62499C1.73249 5.83334 1.45833 5.30834 1.45833 4.66667V4.08334C1.45833 3.44167 1.73249 2.91667 2.62499 2.91667H11.375C12.2325 2.91667 12.5417 3.44167 12.5417 4.08334Z" stroke="#636A71" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.79001 2.91666H3.57001C3.37167 2.70083 3.37751 2.36833 3.58751 2.15833L4.41584 1.33C4.63167 1.11416 4.98751 1.11416 5.20334 1.33L6.79001 2.91666Z" stroke="#636A71" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.4242 2.91666H7.20416L8.79083 1.33C9.00666 1.11416 9.3625 1.11416 9.57833 1.33L10.4067 2.15833C10.6167 2.36833 10.6225 2.70083 10.4242 2.91666Z" stroke="#636A71" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            المنتج
            <svg className="md:ms-10" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.62 5.25L7.81667 9.05334C7.3675 9.5025 6.6325 9.5025 6.18333 9.05334L2.38 5.25" stroke="#636A71" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
