const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header padding-layout">
        <Link to="/">
            <h3>myteam</h3>
        </Link>
        <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/">about</NavLink>
        </nav>

        <button className="btn-contact">
            contact us
        </button>
    </header>
}
