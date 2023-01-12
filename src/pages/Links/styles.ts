import styled from 'styled-components'

export const LinksContent = styled.section`
  width: 22.5rem;
  height: 44.5rem;
  margin: auto;

  display: flex;
  flex-direction: column;

  padding: 0 2rem;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding: 2rem;
  margin-top: 3rem;

  img {
    margin: auto;
    width: 7rem;
    height: 7rem;
  }

  p {
    font-weight: 500;
    line-height: 24px;
  }
`

export const LinkList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem 0;

  li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.25rem;

    background: ${(props) => props.theme.surfaceColor};
    border: 1px solid ${(props) => props.theme.strokeColor};
    border-radius: 5px;

    backdrop-filter: blur(4px);
    /* para suportar o blur no navegador safari*/
    -webkit-backdrop-filter: blur(4px);

    text-decoration: none;
    font-weight: 500;

    transition: background 0.2s;

    :hover {
      background: ${(props) => props.theme.surfaceColorHover};
      border: 1.5px solid ${(props) => props.theme.textColor};
    }
  }
`
export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border-radius: 50%;

    transition: background 0.2s;
  }

  a:hover {
    background: ${(props) => props.theme.highlightColor};
    padding: 16px;
  }
`
