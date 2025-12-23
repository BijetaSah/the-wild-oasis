import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const navbarData = [
  { icon: <HiOutlineHome />, name: "Home", url: "/dashboard" },
  // { icon: <HiOutlineCalendarDays />, name: "Bookings", url: "/bookings" },
  { icon: <HiOutlineHomeModern />, name: "Cabins", url: "/cabins" },
  // { icon: <HiOutlineUsers />, name: "Users", url: "/users" },
  // { icon: <HiOutlineCog6Tooth />, name: "Settings", url: "/settings" },
];

const Navlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    color: var(--color-grey-500);
    padding: 1.2rem 2.4rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background: var(--color-grey-100);
    color: var(--color-grey-800);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-gray-100);
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
function MainNavbar() {
  return (
    <nav>
      <Navlist>
        {navbarData.map((item, id) => (
          <li key={id}>
            <StyledNavLink to={`${item.url}`}>
              {item.icon}
              <span>{item.name}</span>
            </StyledNavLink>
          </li>
        ))}
      </Navlist>
    </nav>
  );
}

export default MainNavbar;
