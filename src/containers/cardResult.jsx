import { Card } from '../components'
import Illustration from '../assets/illustration-thank-you.svg'
import { useRatingContext } from '../context/ratingContext'

const CardResultContainer = () => {
  const { rating } = useRatingContext()

  return (
    <Card
      key='card result'
      initial={{
        opacity: 0,
        display: 'none',
      }}
      animate={{
        display: 'grid',
        opacity: 1,
        transition: {
          delay: 0.1,
          duration: 0.5,
        },
      }}>
      <Card.Header submitted={true}>
        <Card.Image submitted src={Illustration} alt='illustration' />
        <Card.Wrapper>
          <Card.HeaderText submitted>
            You selected {rating} out of 5
          </Card.HeaderText>
        </Card.Wrapper>
      </Card.Header>
      <Card.Content>
        <Card.Title submitted>Thank you!</Card.Title>
        <Card.Text submitted>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </Card.Text>
      </Card.Content>
    </Card>
  )
}

export default CardResultContainer
