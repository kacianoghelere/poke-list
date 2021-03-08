import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding-top: 80px;
`

const PageLogo = styled.img`
  height: 32px;
  width: 32px;
`

const PageLayout = ({ children, title = '' }) => {
  const navbarTitle = 'PokeList'

  useEffect(() => {
    document.title = navbarTitle + (title ? ` | ${title}` : '')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <PageWrapper>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
          >
            <PageLogo
              alt={navbarTitle}
              className="mr-2"
              src="https://image.flaticon.com/icons/png/128/743/743977.png"
            />
            {navbarTitle}
          </Link>
        </div>
      </nav>
      <div className="container">{children}</div>
    </PageWrapper>
  )
}

export default PageLayout