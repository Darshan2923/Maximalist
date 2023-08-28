import "../styles/NewsLetter.css";

function Newsletter() {
    return (
        <>
            <div className="news">
                <div className="news-text">
                    <h2>Newsletter</h2>
                    <form action="mailto:darshanpatel2923@gmail.com">
                        <input type="email" className="news-input" placeholder="your@email.com" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Newsletter;