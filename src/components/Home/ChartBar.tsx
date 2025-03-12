

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"
const chartData = [
  { month: "January", test: 186 },
  { month: "", test: 214 },
  { month: "February", test: 305 },
  { month: "", test: 214 },
  { month: "March", test: 237 },
  { month: "", test: 214 },
  { month: "April", test: 73 },
]

const chartConfig = {
  test: {
    label: "Test",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function ChartBar() {
  return (
    <Card dir="ltr">
      <CardHeader className="text-center">
        <CardTitle className="font-bold">Sales Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="test" background barSize={23} fill="hsla(233, 98%, 60%, 1)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div className="flex gap-2 items-center">
          <div className="text-xl lg:text-2xl">
          30%
          </div>
          <div className="text-sm text-muted-foreground">
          Your sales performance is 30%
          better compare to last month
          </div>
        </div>
        <Button
          className="bg-[#e8eeff] hover:bg-[#d5e0ff] text-[#4f46e5] font-medium rounded-xl py-6 md:px-10"
          variant="ghost"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  )
}
