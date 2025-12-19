import { ref } from 'vue'

export function useFinanceStore() {
  // Today total
  const todayAmount = ref(180.75)

  // Tabs
  const tab = ref('expense')

  // Savings
  const savings = ref(7456)
  const earned = ref(10500)
  const spend = ref(10500)

  const earnedPercent = (earned.value / 12000) * 100
  const spendPercent = (spend.value / 12000) * 100

  const topSpending = ref([
    { label: 'House', icon: 'home', color: 'text-purple-400' },
    { label: 'Transport', icon: 'directions_car', color: 'text-pink-400' },
    { label: 'Office', icon: 'work', color: 'text-orange-400' },
    { label: 'Education', icon: 'school', color: 'text-indigo-400' },
    { label: 'Salary', icon: 'payments', color: 'text-green-500' },
    { label: 'Medicine', icon: 'medication', color: 'text-emerald-500' },
    { label: 'Restaurant', icon: 'restaurant_menu', color: 'text-red-400' },
    { label: 'Fuel', icon: 'local_gas_station', color: 'text-yellow-500' },
  ])

  const monthlyBudget = ref([
    {
      name: 'Transportation',
      icon: 'directions_car',
      color: 'text-pink-500',
      perday: 20,
      used: 500,
      limit: 1000,
      percent: 50,
      barColor: 'bg-pink-400',
    },
    {
      name: 'Training',
      icon: 'school',
      color: 'text-indigo-500',
      perday: 25,
      used: 600,
      limit: 800,
      percent: 75,
      barColor: 'bg-purple-500',
    },
  ])

  return {
    todayAmount,
    tab,
    savings,
    earned,
    spend,
    earnedPercent,
    spendPercent,
    topSpending,
    monthlyBudget,
  }
}
