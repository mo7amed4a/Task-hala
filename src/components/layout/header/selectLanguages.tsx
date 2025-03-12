
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ReactCountryFlag from "react-country-flag"

export default function SelectLanguages() {
    const lang = [
        {
            icon: "GB",
            code: "en",
        },
        {
            icon: "PS",
            code: "ar",
        }
    ]
    
  return (
    <Select defaultValue="en">
      <SelectTrigger className="w-auto border-none shadow-none bg-[#f5f7fa] rounded-full px-3 py-2 h-10">
        
        <SelectValue placeholder="" />
      </SelectTrigger>
      <SelectContent className="w-24 min-w-16">
        {lang.map((item, index) => (
          <SelectItem className="flex items-center" key={index} value={item.code}>
            <div className="flex items-center">
              <ReactCountryFlag
                svg
                style={{
                  width: "16px",
                  height: "16px",
                }}
                countryCode={item.icon}
                className="rounded-full"
              />
              <span className="ms-2 uppercase text-[#636a71]">{item.code}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
