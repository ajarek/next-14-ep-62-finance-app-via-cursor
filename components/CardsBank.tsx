'use client'
import Image from 'next/image'
import { useBalanceStore } from '@/store/balanceStore'

const VisaCard = () => {
  const { removeAllFromBalance } = useBalanceStore()
  return (
    <div className='w-full min-h-[180px] flex flex-col gap-2'>
      <h1 className='text-xl font-semibold'>Moja Karta:</h1>
      <div className='aspect-[2/1] bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg text-white rounded-lg p-4'>
        <div className='flex justify-between items-center border-b pb-4 mb-2'>
          <h2 className=' text-2xl font-semibold italic'>Visa</h2>
          <Image
            src='/images/chip.png'
            alt='chip'
            width={80}
            height={64}
          />
        </div>
        <div className='flex flex-col   '>
          <p className='text-2xl font-mono '>**** **** **** 1234</p>
          <p className=' '>Jan Nowak</p>
          <p className='  '>12/24</p>
        </div>
      </div>
      <button
        className='bg-red-500 text-white w-fit px-4 py-2 rounded-md hover:bg-red-400 my-5'
        aria-label='usuń'
        onClick={() => removeAllFromBalance()}
      >
        Usuń wszystko
      </button>
    </div>
  )
}
export default VisaCard
