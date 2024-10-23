'use client'

import * as React from 'react'
import { Label, Pie, PieChart } from 'recharts'
import { useBalanceStore } from '@/store/balanceStore'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  income: {
    label: 'Income',
    color: 'hsl(var(--chart-1))',
  },

  expense: {
    label: 'Entertainment',
    color: 'hsl(var(--chart-2))',
  },
  diningOut: {
    label: 'Dining Out',
    color: 'hsl(var(--chart-3))',
  },
  groceries: {
    label: 'Groceries',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

const ChartPie = () => {
  const { items } = useBalanceStore()
  const expenseValues = items.filter((item) => item.type === 'expense')
  const expense = expenseValues.reduce((acc, item) => acc + item.amount, 0)
  const incomeValues = items.filter((item) => item.type === 'income')
  const income = incomeValues.reduce((acc, item) => acc + item.amount, 0)

  const chartData = [
    { browser: 'Przychody', visitors: income, fill: 'green' },
    { browser: 'Wydatki', visitors: expense, fill: 'red' },
  ]
  const totalVisitors = React.useMemo(() => {
    return (income + expense).toFixed(2)
  }, [expense, income])
  return (
    <Card className='flex flex-col bg-transparent border-none'>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='browser'
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-primary-foreground text-2xl font-semibold'
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='text-xl fill-primary-foreground'
                        >
                          Bilans
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ChartPie
