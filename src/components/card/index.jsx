import {
  CardContainer,
  Header,
  Content,
  Title,
  HeaderText,
  Text,
  Wrapper,
  RoundedWrapper,
  Btn,
  Image,
  Form,
  BtnControls,
  BtnSubmit,
} from './styles/card'

const Card = ({ children, ...restProps }) => (
  <CardContainer {...restProps}>{children}</CardContainer>
)

Card.Header = ({ children, ...restProps }) => (
  <Header {...restProps}>{children}</Header>
)
Card.Content = ({ children, ...restProps }) => (
  <Content {...restProps}>{children}</Content>
)
Card.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Card.HeaderText = ({ children, ...restProps }) => (
  <HeaderText {...restProps}>{children}</HeaderText>
)
Card.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Card.Form = ({ children, ...restProps }) => (
  <Form {...restProps}>{children}</Form>
)

Card.BtnControls = ({ children, ...restProps }) => (
  <BtnControls {...restProps}>{children}</BtnControls>
)

Card.Wrapper = ({ children, ...restProps }) => (
  <Wrapper {...restProps}>{children}</Wrapper>
)

Card.RoundedWrapper = ({ children, ...restProps }) => (
  <RoundedWrapper {...restProps}>{children}</RoundedWrapper>
)

Card.Btn = ({ children, ...restProps }) => <Btn {...restProps}>{children}</Btn>

Card.BtnSubmit = ({ children, ...restProps }) => (
  <BtnSubmit {...restProps}>{children}</BtnSubmit>
)

Card.Image = ({ ...restProps }) => <Image {...restProps} />

export default Card
