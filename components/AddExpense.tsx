'use client'

import React, { useState } from 'react'
import { useBalanceStore } from '@/store/balanceStore'

const AddExpense: React.FC = () => {
  const [amount, setAmount] = useState<string>('') // Ustawienie na pusty ciąg
  const [description, setDescription] = useState<string>('')
  const [type, setType] = useState<string>('expense')
  const [date, setDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  )
  const { addItemToBalance } = useBalanceStore()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const expense = {
      id: Date.now(),
      type,
      amount: type === 'income' ? Number(amount) : -Number(amount),
      description,
      date,
    }

    addItemToBalance(expense)
    setDate(new Date().toISOString().split('T')[0])
    setAmount('')
    setDescription('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full min-h-[300px] flex flex-col gap-4  '
    >
      <h1 className='text-xl font-semibold'>Dodaj operację:</h1>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <input
            type='radio'
            name='type'
            value='expense'
            id='expense'
            onChange={(e) => setType(e.target.value)}
            required
            aria-label='koszty'
          />
          <label htmlFor='expense'>Koszty</label>
        </div>
        <div className='flex items-center gap-2'>
          <input
            type='radio'
            name='type'
            value='income'
            id='income'
            onChange={(e) => setType(e.target.value)}
            required
            aria-label='przychody'
          />
          <label htmlFor='income'>Przychody</label>
        </div>
      </div>
      <div className='flex items-center gap-2 '>
        <label htmlFor='date'>Data:</label>
        <input
          type='date'
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='w-full text-black px-1 py-2 rounded-md'
          aria-label='data'
        />
      </div>
      <input
        type='number'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Kwota'
        required
        className='border p-2 rounded text-black'
        aria-label='kwota'
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Opis'
        required
        className='border p-2 rounded text-black'
        aria-label='opis'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-400 text-white p-2 rounded'
        aria-label='dodaj'
      >
        Dodaj wydatek
      </button>
    </form>
  )
}

export default AddExpense
