'use client'
import { useBalanceStore } from '@/store/balanceStore'

const RecordList = () => {
  const { items, removeItemFromBalance } = useBalanceStore()
  return (
    <div className='w-full  flex flex-col gap-2 '>
      <h1 className='text-xl font-semibold'>Lista Operacji:</h1>
      {items.length > 0 ? (
        <div className='h-[200px] overflow-y-auto scrollbar'>
          {items
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            )
            .map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between gap-2'
              >
                <div>{item.date}</div>
                <div
                  className={`${
                    item.type === 'expense' ? 'text-red-500' : 'text-green-500'
                  } text-xl`}
                >
                  {item.amount.toFixed(2)}
                </div>
                <div>{item.description}</div>
                <button
                  onClick={() => removeItemFromBalance(item.id)}
                  aria-label='usuń'
                >
                  🗑️
                </button>
              </div>
            ))}
        </div>
      ) : (
        <div className='text-red-500'>Brak operacji!</div>
      )}
    </div>
  )
}

export default RecordList
