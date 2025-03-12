import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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
  { name: 'Starbucks', value: 74779 },
  { name: "McDonald's", value: 56635 },
  { name: "L'Oréal", value: 43887 },
  { name: 'eBay', value: 19027 },
  { name: 'Apple', value: 8142 },
  { name: 'IBM', value: 4918 }
];


const chartConfig = {
  desktop: {
    label: "value",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card className="border-none shadow-none" dir="ltr">
      <CardHeader>
        <CardTitle className="text-sm">Saint Vincent and the Grenadines</CardTitle>
        <CardDescription className="text-lg md:text-xl text-black lg:text-2xl">207,388</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="md:h-52 w-full" config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          
          >
            <XAxis type="number" dataKey="value" />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // width={90}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="hsla(154, 72%, 37%, 1)" barSize={10} radius={5} layout="vertical">
              <LabelList
                dataKey="value"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
