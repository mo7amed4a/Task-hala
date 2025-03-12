

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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
const chartData = [
  { month: "January", one: 6, two: 2 },
  { month: "February", one: 5, two: 10 },
  { month: "March", one: 7, two: 11 },
  { month: "April", one: 3, two: 7 },
  { month: "May", one: 9, two: 9 },
  { month: "June", one: 12, two: 10 },
]

const chartConfig = {
  one: {
    label: "Test one",
    color: "hsl(var(--chart-1))",
  },
  two: {
    label: "Test two",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function ChartLine() {
  return (
    <Card dir="ltr">
      <CardHeader>
        <CardTitle>Report post by post Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -30,
              right: 12,
            }}
          >
            <CartesianGrid />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="one"
              type="monotone"
              stroke="hsla(259, 100%, 53%, 1)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="two"
              type="monotone"
              stroke="hsla(25, 100%, 82%, 1)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex text-sm justify-center gap-4 w-full ">
          <div className="flex items-center gap-2">
            <span className="bg-[hsla(259,100%,53%,1)] w-4 h-3 p-0.5 rounded-full"></span>
            <span>post success</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[hsla(25,100%,82%,1)] w-4 h-3 p-0.5 rounded-full"></span>
            <span>post failed</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
