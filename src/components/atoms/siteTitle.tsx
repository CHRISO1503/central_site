import "../molecules/externalSites.css";

export default function SiteTitle({
    title,
    href,
}: {
    title: string;
    href: string;
}) {
    return (
        <a href={href}>
            <h1 className="title">
                {title}
                <img
                    className="external-icon"
                    src={"./src/assets/icons/external-link.svg"}
                />
            </h1>
        </a>
    );
}
