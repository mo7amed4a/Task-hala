import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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
const chartData = [{ month: "january", one: 1260, two: 570, three: 700, four: 800 }]

const chartConfig = {
  one: {
    label: "One",
    color: "hsl(var(--chart-1))",
  },
  two: {
    label: "Two",
    color: "hsl(var(--chart-2))",
  },
  three: {
    label: "Three",
    color: "hsl(var(--chart-2))",
  },
  Four: {
    label: "Four",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function RadialChart() {

  return (
    <Card className="flex flex-col" dir="ltr">
      <CardHeader className="items-center pb-0">
        <div className="flex justify-between w-full">
          <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3057 1.85345L11.2716 2.88679L6.31726 8.18679L11.2716 13.4868L10.3057 14.5201L4.41653 8.18679L10.3057 1.85345Z" fill="#717171" />
          </svg>
          <CardTitle>March 2023</CardTitle>
          <svg width={7} height={14} viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.976562 0.853455L0.0106201 1.88679L4.96497 7.18679L0.0106201 12.4868L0.976562 13.5201L6.86569 7.18679L0.976562 0.853455Z" fill="#717171" />
          </svg>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            // endAngle={180}
            innerRadius={80}
            outerRadius={130}
            barGap={4}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          45623
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          visitors this month
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="one"
              stackId="a"
              cornerRadius={5}
              fill="hsla(7, 80%, 79%, 1)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="two"
              fill="hsla(29, 92%, 57%, 1)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="three"
              fill="hsla(49, 100%, 50%, 1)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="four"
              fill="hsla(233, 98%, 60%, 1)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex gap-2 text-sm">
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 cursor-auto" >
          <svg className="size-5" width={17} height={19} viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.26114 18.2257C12.7712 18.2257 16.4405 14.3005 16.4405 9.47571C16.4405 4.65096 12.7712 0.725708 8.26114 0.725708C3.75104 0.725708 0.0817871 4.65096 0.0817871 9.47571C0.0817871 14.3005 3.75104 18.2257 8.26114 18.2257ZM11.1182 6.85071C11.2813 6.84625 11.4435 6.87677 11.5954 6.94047C11.7473 7.00417 11.8857 7.09976 12.0025 7.22159C12.1193 7.34343 12.2121 7.48905 12.2755 7.64987C12.3388 7.81069 12.3714 7.98345 12.3714 8.15797C12.3713 8.33249 12.3386 8.50522 12.2752 8.666C12.2117 8.82677 12.1188 8.97233 12.0019 9.09408C11.885 9.21583 11.7466 9.31132 11.5946 9.37491C11.4427 9.4385 11.2804 9.46891 11.1174 9.46433C10.7989 9.4554 10.4962 9.31374 10.2739 9.06955C10.0516 8.82536 9.92728 8.49794 9.92739 8.15709C9.92749 7.81625 10.052 7.48892 10.2745 7.24489C10.4969 7.00085 10.7997 6.85941 11.1182 6.85071ZM7.60024 12.9048C8.03649 12.9985 8.48578 12.9985 8.92203 12.9048C9.12896 12.8593 9.33508 12.7902 9.53548 12.701C9.72687 12.6135 9.915 12.505 10.0909 12.379C10.261 12.2547 10.4238 12.1112 10.5743 11.9511C10.7239 11.7918 10.8581 11.6177 10.9742 11.4331L12.3304 12.4105C11.9778 12.9695 11.5282 13.451 11.0061 13.8288C10.4742 14.2129 9.87699 14.4816 9.24838 14.6198C8.5967 14.7599 7.92546 14.7596 7.27389 14.619C6.64509 14.4827 6.04788 14.2141 5.51696 13.8288C4.99483 13.45 4.54487 12.9684 4.19109 12.4096L5.54723 11.4322C5.66419 11.6168 5.79833 11.791 5.94638 11.9485C6.39798 12.434 6.97317 12.7666 7.60024 12.9048ZM5.39836 6.85071C5.55954 6.85077 5.71912 6.88478 5.868 6.95082C6.01689 7.01685 6.15216 7.11361 6.26608 7.23557C6.38001 7.35753 6.47037 7.5023 6.532 7.66161C6.59363 7.82093 6.62532 7.99167 6.62527 8.16408C6.62521 8.3365 6.59341 8.50722 6.53169 8.66649C6.46996 8.82576 6.37951 8.97047 6.26551 9.09234C6.1515 9.21422 6.01617 9.31088 5.86725 9.37681C5.71832 9.44274 5.55872 9.47664 5.39755 9.47658C5.07204 9.47647 4.75991 9.33803 4.52983 9.09172C4.29974 8.84542 4.17053 8.51142 4.17064 8.16321C4.17075 7.815 4.30016 7.48109 4.5304 7.23495C4.76065 6.98881 5.07286 6.85059 5.39836 6.85071Z" fill="#344BFD" />
          </svg>
        </Button>
        <div>
          <span className="flex items-center gap-2 font-medium leading-none">
          You are doing good!
          </span>
          <span className="leading-none text-muted-foreground">
          You almost reached your goal
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
