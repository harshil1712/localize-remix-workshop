import { Link, useLocation } from "@remix-run/react"
import { useTranslation } from "react-i18next"

const languages = [
    {
        name: 'EN',
        value: 'en-US'
    },
    {
        name: 'DE',
        value: 'de-DE'
    }
]

export default function Nav() {
    const { t, ready, i18n } = useTranslation();
    const { pathname } = useLocation();
    return (
        <nav className="flex justify-between px-4 bg-slate-300 py-8">
            <div>
                <Link to="/">Remixed Recipes</Link>
            </div>
            <div className="flex justify-around">
                {
                    languages.map((lng) => {
                        return (
                            <Link
                                to={`${pathname}?lng=${lng.value}`}
                                key={lng.value}
                                className={(i18n.resolvedLanguage === lng.value ? "underline " : "") + "px-1"}
                            >
                                {lng.name}
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}