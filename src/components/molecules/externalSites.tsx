import SiteDescription from "../atoms/siteDescription";
import SiteImage from "../atoms/siteImage";

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
        <div className="external-sites">
            {sitesAndImages.map((site, index) => (
                <div key={index}>
                    <div
                        style={{
                            transform: `translate(${
                                Math.abs(currentPos) % sitesAndImages.length ==
                                index
                                    ? 0
                                    : -102
                            }vw)`,
                        }}
                        className="site-container"
                    >
                        <SiteImage key={index} src={site.src} />
                    </div>
                    <div
                        style={{
                            transform: `translate(${
                                Math.abs(currentPos) % sitesAndImages.length ==
                                index
                                    ? 0
                                    : -100
                            }vw)`,
                        }}
                        className="site-container"
                    >
                        <SiteDescription
                            title={site.title}
                            description={site.description}
                            href={site.href}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
