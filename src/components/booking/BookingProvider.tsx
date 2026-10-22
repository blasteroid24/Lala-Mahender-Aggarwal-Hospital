import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { BookingDialog } from './BookingDialog'

export type BookingPreset = { speciality?: string; doctorId?: string }

type BookingContextValue = {
  openBooking: (preset?: BookingPreset) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState<BookingPreset>({})

  const openBooking = useCallback((p: BookingPreset = {}) => {
    setPreset(p)
    setOpen(true)
  }, [])

  const value = useMemo(() => ({ openBooking }), [openBooking])

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingDialog open={open} preset={preset} onClose={() => setOpen(false)} />
    </BookingContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>')
  return ctx
}
