import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Breadcrumb = styled.ol`
background-color: #fff5;

.breadcrumb-item,
.breadcrumb-item a {
  color: white;
  text-shadow: 1px 1px #0003;

  &.active,
  &:active {
    color: white;
    font-weight: bold;
  }
}
`

const PageBreadcrumb = ({ sections = [] }) => (
  <nav
    aria-label="breadcrumb"
    className="mb-5"
  >
    <Breadcrumb className="breadcrumb">
      {sections.map(({ name, link }) => (
        <li className={`breadcrumb-item ${!link ? 'active' : ''}`}>
          {link ? (
            <Link to={link}>
              <span className="text-capitalize">{name}</span>
            </Link>
          ) : (
            <span className="text-capitalize">{name}</span>
          )}
        </li>
      ))}
    </Breadcrumb>
  </nav>
)

export default PageBreadcrumb
