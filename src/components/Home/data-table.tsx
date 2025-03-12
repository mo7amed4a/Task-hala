
import { useState } from "react"
import { ArrowUpDown } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Sample data
const initialData = [
  { id: 1, reason: "عدم توفر المنتج", percentage: 35, count: 120 },
  { id: 2, reason: "سعر مرتفع", percentage: 25, count: 85 },
  { id: 3, reason: "جودة منخفضة", percentage: 20, count: 68 },
  { id: 4, reason: "تأخير في التوصيل", percentage: 15, count: 52 },
  { id: 5, reason: "أخرى", percentage: 5, count: 17 },
]

type SortDirection = "asc" | "desc" | null
type SortColumn = "percentage" | "count" | null

export default function DataTable() {
  const [data, setData] = useState(initialData)
  const [sortColumn, setSortColumn] = useState<SortColumn>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)

  const handleSort = (column: SortColumn) => {
    // If clicking the same column, toggle direction
    if (sortColumn === column) {
      const newDirection = sortDirection === "asc" ? "desc" : sortDirection === "desc" ? null : "asc"
      setSortDirection(newDirection)

      if (newDirection === null) {
        setSortColumn(null)
        setData(initialData)
        return
      }
    } else {
      // New column, start with ascending
      setSortColumn(column)
      setSortDirection("asc")
    }

    // Sort the data
    const sortedData = [...data].sort((a, b) => {
      if (column === null) return 0

      const valueA = a[column]
      const valueB = b[column]

      if (sortDirection === "asc" || (sortColumn !== column && sortDirection !== "desc")) {
        return valueA > valueB ? 1 : -1
      } else {
        return valueA < valueB ? 1 : -1
      }
    })

    setData(sortedData)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="border rounded-sm overflow-hidden">
        <Table dir="rtl">
          <TableHeader className="bg-[#f5f7fa]">
            <TableRow>
              <TableHead className="text-center font-medium text-[#636a71] w-16">#</TableHead>
              <TableHead className="text-right font-medium text-[#636a71]">السبب</TableHead>
              <TableHead
                className="text-right font-medium text-[#636a71] cursor-pointer"
                onClick={() => handleSort("percentage")}
              >
                <div className="flex items-center justify-between">
                  <span>النسبة المئوية</span>
                  <div className="flex items-center">
                    <ArrowUpDown className="h-4 w-4 text-[#9ba6b1]" />
                  </div>
                </div>
              </TableHead>
              <TableHead
                className="text-right font-medium text-[#636a71] cursor-pointer"
                onClick={() => handleSort("count")}
              >
                <div className="flex items-center justify-between">
                  <span>العدد</span>
                  <div className="flex items-center">
                    <ArrowUpDown className="h-4 w-4 text-[#9ba6b1]" />
                  </div>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="text-center">{row.id}</TableCell>
                <TableCell className="text-right">{row.reason}</TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center gap-1 justify-">
                    <Progress className="h-1 w-20 rtl:-rotate-180" value={row.percentage} />
                    <span>{row.percentage}%</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

