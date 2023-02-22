import SiteTitle from "../atoms/siteTitle";
import SiteImage from "../atoms/siteImage";
import "./externalSites.css";
import SiteDescription from "../atoms/siteDescription";

export default function ExternalSites({ currentPos }: { currentPos: number }) {
    const sitesAndImages = [
        {
            href: "https://puzzles.onrender.com/",
            src: "../src/assets/siteImages/puzzles.png",
            title: "Puzzles",
            description:
                "This is my first React app. It is a puzzle app which contains",
        },
        {
            href: "https://chess-9x0f.onrender.com/",
            src: "../src/assets/siteImages/chess.png",
            title: "Chess Online",
            description:
                "An online chess site that utilizes web sockets to communicate players' moves through the backend.",
        },
        {
            href: "https://flashcards-online-frontend.onrender.com/",
            src: "../src/assets/siteImages/flashcards.png",
            title: "Flashcards Online",
            description:
                "A revision tool in which I learned how to create and manage an app with users and a dedicated database.",
        },
    ];

    return (
        <>
            <div className="site-images">
                {sitesAndImages.map((site, index) => (
                    <div
                        className="site-image"
                        key={index}
                        style={{
                            transform: `translate(${
                                Math.abs(currentPos) % sitesAndImages.length ==
                                index
                                    ? 0
                                    : -102
                            }%, -${100 * index}%)`,
                        }}
                    >
                        <SiteImage key={index} src={site.src} />
                    </div>
                ))}
            </div>
            <div className="site-titles">
                {sitesAndImages.map((site, index) => (
                    <div
                        key={index}
                        style={{
                            transform: `translate(${
                                Math.abs(currentPos) % sitesAndImages.length ==
                                index
                                    ? 0
                                    : -102
                            }%, -${100 * index}%)`,
                        }}
                        className="site-title"
                    >
                        <SiteTitle
                            key={index}
                            title={site.title}
                            href={site.href}
                        />
                    </div>
                ))}
            </div>
            <div className="site-descriptions">
                {sitesAndImages.map((site, index) => (
                    <div
                        key={index}
                        className={`site-title ${
                            Math.abs(currentPos) % sitesAndImages.length ==
                            index
                                ? "isActive"
                                : ""
                        }`}
                    >
                        <SiteDescription
                            key={index}
                            description={site.description}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
