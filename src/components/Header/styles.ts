import styled from "styled-components";
import { media } from "../../styles/media";
import { Container } from "../ui/Layout";

export const SkipLink = styled.a`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 100;
  padding: 10px 16px;
  border-radius: 8px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-weight: 600;
  transform: translateY(-200%);

  &:focus-visible {
    transform: none;
  }
`;

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.2s var(--ease),
    border-color 0.2s var(--ease);

  &[data-scrolled="true"] {
    background: color-mix(in srgb, var(--bg) 85%, transparent);
    border-color: var(--border);
    backdrop-filter: saturate(180%) blur(12px);
    -webkit-backdrop-filter: saturate(180%) blur(12px);
  }
`;

export const HeaderContainer = styled(Container)`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Brand = styled.a`
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: -0.01em;

  span {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--text);
    color: var(--bg);
    font-size: 0.8125rem;
    letter-spacing: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    display: flex;
    gap: 28px;
  }

  ul a {
    position: relative;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-muted);
    transition: color 0.2s var(--ease);

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      height: 2px;
      border-radius: 2px;
      background: var(--accent);
      transform: scaleX(0);
      transition: transform 0.25s var(--ease);
    }

    &:hover,
    &[aria-current="true"] {
      color: var(--text);
    }

    &[aria-current="true"]::after {
      transform: scaleX(1);
    }
  }

  ${media.md} {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  border-radius: 10px;

  ${media.md} {
    display: grid;
  }
`;

export const MobileNav = styled.nav`
  display: none;
  padding: 8px var(--gutter) 24px;
  border-top: 1px solid var(--border);
  background: var(--bg);

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  a:not([class]) {
    display: block;
    padding: 14px 0;
    font-size: 1.125rem;
    font-weight: 500;
    border-bottom: 1px solid var(--border);
  }

  > a {
    width: 100%;
  }

  ${media.md} {
    &[data-open="true"] {
      display: block;
    }
  }
`;
