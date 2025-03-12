;

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 37 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "June", desktop: 15 },
  { month: "June", desktop: 147 },
  { month: "June", desktop: 70 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function ChartArea() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold text-[#333333]">
          $1250
        </CardTitle>
        <CardDescription className="text-[#767676] text-sm mt-1">
          Your total saving so far
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -40,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              // width={80}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="desktop"
              type="natural"
              fill="hsla(232, 86%, 83%, 0.8)"
              fillOpacity={0.4}
              stroke="hsla(232, 86%, 83%, 1)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          className=" mt-4 bg-[#e8eeff] hover:bg-[#d5e0ff] text-[#4f46e5] font-medium rounded-xl py-6 md:px-10"
          variant="ghost"
        >
          Details
        </Button>
      </CardFooter>
    </Card>
  );
}
