import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img className="w-8 h-8" src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-4 cursor-pointer">
                    <button>
                        <img className="w-6 h-6" src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img className="w-6 h-6" src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar