import styled from 'styled-components'
import { motion } from 'framer-motion'

export const CardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: min(88%, 25.75rem);
  padding: 1.5rem;
  border-radius: 0.9375rem;
  text-align: left;
  background-image: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  row-gap: 1.5rem;

  @media only screen and (min-width: 26.875rem) {
    padding: 2rem;
    grid-gap: 1.5rem;
  }
`

export const Header = styled.div`
  grid-column: ${({ submitted }) => (submitted ? '2/5' : '1/-1')};
  text-align: ${({ submitted }) => (submitted ? 'center' : 'left')};
`

export const Content = styled.div`
  grid-column: 1/-1;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: ${({ submitted }) =>
    submitted ? '0 0 .625rem 0' : '1rem 0 .625rem 0'};
  color: var(--neutral-100);
  text-align: ${({ submitted }) => (submitted ? 'center' : 'left')};

  @media only screen and (min-width: 26.875rem) {
    font-size: 1.75rem;
    margin: ${({ submitted }) =>
      submitted ? '0 0 .4375rem 0' : '1.875rem 0 .625rem 0'};
  }
`

export const Text = styled.p`
  font-size: 0.875rem;
  color: var(--neutral-300);
  line-height: 1.375rem;
  grid-column: 1/-1;
  margin: 0;
  text-align: ${({ submitted }) => (submitted ? 'center' : 'left')};

  @media only screen and (min-width: 26.875rem) {
    font-size: 0.9375rem;
    line-height: 1.5rem;
    margin-right: ${({ submitted }) => (submitted ? '8px' : '0')};
    margin-bottom: ${({ submitted }) => (submitted ? '13px' : '0')};
  }
`

export const HeaderText = styled(Text)`
  color: var(--accent);
  margin: 0;
`

export const Wrapper = styled.div`
  background-color: var(--primary-500);
  border-radius: 1.406rem;

  padding: 0.3125rem 0.75rem;
  text-align: center;

  /* @media only screen and (min-width: 26.875rem) {
  } */
`

export const RoundedWrapper = styled.div`
  background-color: var(--primary-500);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;

  @media only screen and (min-width: 26.875rem) {
    width: 3rem;
    height: 3rem;
  }
`

export const Btn = styled(motion.button)`
  display: block;
  border: 0;
  border-radius: 50%;
  font-family: inherit;
  width: 2.625rem;
  height: 2.625rem;
  font-weight: 700;
  font-size: 0.875rem;
  background-color: var(--primary-500);
  color: var(--neutral-400);
  cursor: pointer;

  @media only screen and (min-width: 26.875rem) {
    width: 3.125rem;
    height: 3.125rem;
    font-size: 1rem;
  }
`

export const BtnSubmit = styled(motion.button)`
  border-radius: 1.406rem;
  font-size: 0.875rem;
  font-weight: 700;
  font-family: inherit;
  border: 0;
  padding: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
  grid-column: 1/-1;

  @media only screen and (min-width: 26.875rem) {
    font-size: 0.9375rem;
  }
`

export const Image = styled.img`
  display: block;
  padding: ${({ submitted }) => (!submitted ? '.75rem' : '.625rem 0 1.5rem 0')};
  border: 0;
  width: 100%;
  max-width: 100%;

  @media only screen and (min-width: 26.875rem) {
    padding: ${({ submitted }) => (!submitted ? '1rem' : '.625rem 0 1.5rem 0')};
  }
`

export const Form = styled.form`
  grid-column: 1/-1;
`

export const BtnControls = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1.125rem;

  &:last-child {
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: 26.875rem) {
    column-gap: 1.375rem;
    margin-right: 0.4375rem;

    &:last-child {
      margin-top: 2rem;
    }
  }
`
