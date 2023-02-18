import "../molecules/externalSites.css";

export default function SiteImage({ src }: { src: string }) {
    return (
        <div className="site-image">
            <img className="thumbnail" src={src} />
        </div>
    );
}
