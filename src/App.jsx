import { GlobalStyles } from './globalStyles'
import {
  CardRatingContainer,
  CardResultContainer,
  FooterContainer,
} from './containers'
import { useRatingContext } from './context/ratingContext'

const App = () => {
  const { isSubmitted } = useRatingContext()
  return (
    <>
      <main>
        <GlobalStyles />
        {!isSubmitted ? <CardRatingContainer /> : <CardResultContainer />}
      </main>
      <FooterContainer />
    </>
  )
}

export default App
