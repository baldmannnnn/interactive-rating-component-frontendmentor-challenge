import { Card } from '../components'
import { ratingList, fadeOut, btnGestures } from '../utils/data'
import { useRatingContext } from '../context/ratingContext'
import IconStar from '../assets/icon-star.svg'

const CardRatingContainer = () => {
  const { rating, setRating, setIsSubmitted } = useRatingContext()

  const handleResetRating = e => {
    if (
      e.relatedTarget?.type === 'button' ||
      e.relatedTarget?.type === 'submit'
    )
      return

    setRating('')
  }

  return (
    <Card
      key='card rating'
      variants={fadeOut}
      initial='hidden'
      animate='visible'
      exit='exit'>
      <Card.Header>
        <Card.RoundedWrapper>
          <Card.Image src={IconStar} alt='star' />
        </Card.RoundedWrapper>
        <Card.Title>How did we do?</Card.Title>
        <Card.Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Card.Text>
      </Card.Header>
      <Card.Form
        onSubmit={e => {
          e.preventDefault()
          if (!rating?.length) return

          setIsSubmitted(true)
        }}>
        <Card.BtnControls>
          {ratingList.map(ratings => (
            <Card.Btn
              whileHover={{
                scale: 1.05,
                color: 'var(--neutral-100)',
                backgroundColor: 'var(--accent)',
              }}
              whileTap={{
                scale: 0.95,
              }}
              whileFocus={{
                backgroundColor: 'var(--neutral-500)',
                color: 'var(--neutral-100)',
              }}
              key={ratings.id}
              type='button'
              onClick={() => setRating(ratings.rate)}
              onBlur={handleResetRating}>
              {ratings.rate}
            </Card.Btn>
          ))}
        </Card.BtnControls>
        <Card.BtnControls>
          <Card.BtnSubmit
            variants={btnGestures}
            initial='initial'
            animate='initial'
            whileHover='hover'
            whileTap={{ scale: 0.95 }}>
            Submit
          </Card.BtnSubmit>
        </Card.BtnControls>
      </Card.Form>
    </Card>
  )
}

export default CardRatingContainer
