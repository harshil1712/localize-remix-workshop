import { Link } from "@remix-run/react";

export default function Card({ image, title, slug, description }) {
    return (
        <Link to={slug}>
            <div className="rounded-lg bg-slate-100">
                <div className="w-full overflow-hidden rounded-t-lg">
                    <img src={image.url} alt={image.description} />
                </div>
                <h3 className="mt-4 text-xl uppercase text-center">{title}</h3>
                <p className="text-center text-slate-500 pb-4">{description}</p>
            </div>
        </Link>
    )
}