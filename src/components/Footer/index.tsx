import styled from "styled-components";
import { profile } from "../../data/profile";
import { media } from "../../styles/media";
import { Icon } from "../ui/Icon";
import { Container } from "../ui/Layout";

const FooterBar = styled.footer`
  padding: 32px 0 40px;
  border-top: 1px solid var(--border);
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--text-subtle);

  nav {
    display: flex;
    gap: 20px;
  }

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s var(--ease);

    ${media.touch} {
      &::after {
        content: "";
        position: absolute;
        inset: -11px -6px;
      }
    }

    &:hover {
      color: var(--text);
    }
  }

  ${media.sm} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export function Footer() {
  return (
    <FooterBar>
      <Inner>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Redes">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#inicio">
            Voltar ao topo <Icon name="arrowUp" size={14} />
          </a>
        </nav>
      </Inner>
    </FooterBar>
  );
}
