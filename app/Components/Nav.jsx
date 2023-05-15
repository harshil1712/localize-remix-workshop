import { Link } from "@remix-run/react"

export default function Nav() {
    return (
        <nav className="flex justify-between px-4 bg-slate-300 py-8">
            <div>
                <Link to="/">Remixed Recipes</Link>
            </div>
            <div className="flex justify-around">
            </div>
        </nav>
    )
}