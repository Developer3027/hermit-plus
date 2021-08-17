import styled from 'styled-components';

//todo: prev color used - #090b13
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0 36px;
  height: 70px;
  background-color: var(--primary-dark-color);
  overflow-x: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  z-index: 10;
`;

export const Logo = styled.img`
  padding-top: 5px;
  width: 130px;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    .icon {
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const Login = styled.button`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f9f9f9;
  transition: all 250ms ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
