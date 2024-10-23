import AddExpense from '@/components/AddExpense'
import VisaCard from '@/components/CardsBank'
import ChartPie from '@/components/ChartPie'
import RecordList from '@/components/RecordList'
const Home: React.FC = () => {
  return (
    <div className='min-h-screen container flex flex-col justify-center mx-auto px-24 max-lg:px-4 py-0 bg-slate-800 text-white'>
      <h1 className='text-2xl text-center font-bold mb-8'>
        Aplikacja osobistych finansów
      </h1>
      <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 max-sm:gap-2 '>
        <AddExpense />
        <div className='flex flex-col gap-1 '>
          <RecordList />
          <ChartPie />
        </div>
        <div className='flex flex-col gap-1 '>
          <VisaCard />
        </div>
      </div>
    </div>
  )
}

export default Home
