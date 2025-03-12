import type React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function SearchInput({ className, ...props }: SearchInputProps) {
  return (
    <div className="relative">
      <Input
        type="search"
        className={cn("w-64 pl-10 pr-4 py-2 bg-[#f5f7fa] border-none rounded-full text-right", className)}
        {...props}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#9ba6b1]" />
    </div>
  )
}

