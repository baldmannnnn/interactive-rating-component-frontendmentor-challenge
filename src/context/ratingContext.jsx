import { useState, createContext, useContext } from 'react'

const RatingContext = createContext()

const RatingContextProvider = ({ children }) => {
  const [rating, setRating] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <RatingContext.Provider
      value={{ rating, setRating, isSubmitted, setIsSubmitted }}>
      {children}
    </RatingContext.Provider>
  )
}

const useRatingContext = () => useContext(RatingContext)

export { useRatingContext, RatingContextProvider }
