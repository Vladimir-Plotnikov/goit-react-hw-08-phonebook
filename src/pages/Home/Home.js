import heroPicture from '../../images/hero.png';
import { HomeSection, Container, Wrapper, StyledLink } from './Home.styled';

export default function Home() {
  return (
    <HomeSection>
      <Container>
        <Wrapper>
          <div>
            <h1>Welcome to Phonebook App</h1>
            <p>
              Stop using your grandma's old Rolodex and asking your friends to text you their numbers for the tenth time.
              Now you can organize them yourself and forget them just as easily! But fear not, brave user, for our search function will always be there to save the day. Happy dialing!
            </p>
            <StyledLink to="/register">Get Started</StyledLink>
          </div>
          <img src={heroPicture} alt="People with phones" />
        </Wrapper>
      </Container>
    </HomeSection>
  );
}
