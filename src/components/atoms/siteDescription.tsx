import "../molecules/externalSites.css";

export default function SiteDescription({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
    return (
        <div className="site-description">
            <a href={href}>
                <h1 className="site-info title">
                    {title}
                    <img
                        className="external-icon"
                        src={"./src/assets/icons/external-link.svg"}
                    />
                </h1>
            </a>
        </div>
    );
}
