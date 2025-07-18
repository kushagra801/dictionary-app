import {useParams, Link} from "react-router-dom";
import "./LetterPage.css";
import UniverseBackground from "./UniverseBackground";

const dictionary = {
    A: {
        word: "Adventurous",
        description: "Imene is a true adventure lover. Whether she's traveling the world solo with nothing but a backpack and her boundless curiosity, living boldly on her own terms when others play it safe, or spontaneously inviting a stranger in Prague out for ice skating on a winter evening, everything about her radiates adventure. Her eyes light up at the mention of unexplored paths, and her stories always will make you wonder \"WoW! This girl...\" with a dropped jaw. Adventure isn't just what she does—it's who she is.\n"
    },
    B: {
        word: "Beautiful",
        description: "Imene possesses a beauty that captivates instantly. With eyes like the ocean that anyone could get lost in, and hair like a beautiful shade of night that feels like a dream, she's visually striking. But her true beauty radiates from within—her laugh can brighten even the darkest day, filling rooms with a warm, infectious energy. Her presence alone has a transformative quality, turning ordinary moments into something magical. It's not just her appearance, but her entire essence that embodies beauty in its most authentic form. (Bi-polar was a close second for this letter, but we'll save that for another day! 😂)\n"
    },
    C: {
        word: "Carefree",
        description: "Imene embodies the essence of carefree living. She moves through life with a refreshing lightness, unburdened by the weight of unnecessary worries. When others overthink, she simply smiles and follows her heart. There's something magical about the way she can transform mundane moments into spontaneous adventures. Around her, the world feels less complicated, the air lighter, and suddenly I remember how beautiful life could be when she is around."
    },
    D: {
        word: "Daring",
        description: "She dares to dream, she dares to overcome all problems and she dares to live life on her own terms breaking the shackles of society.\n"
    },
    E: {
        word: "Eccentric",
        description: "Well among all the good qualities she is a bit crazy too I must say, honestly I can't put in words why I feel so I think it is just the aura around her but that's just part of her charm.\n"
    },
    F: {
        word: "Fighter",
        description: "She is a real fighter, she has been fighting for her dreams since she was a kid and she keeps winning every time, she always figures a way out. Imene's resilience isn't just admirable, it's fundamental to who she is. Where others might surrender to obstacles, she sees them as challenges to overcome, puzzles to solve. Her determination doesn't manifest as loud aggression but as quiet, unwavering persistence. Time and again, when faced with circumstances that would break most spirits, she has found. Her story isn't one of never facing defeat, but of refusing to let defeat have the final word.\n"
    },
    G: {
        word: "Gorgeous",
        description: "Imene embodies a magnetic, show-stopping presence that turns heads and captivates attention. Unlike simple beauty, her gorgeousness is bold and striking, it's that perfect blend of features that stays on one's mind even after she is long gone.\n"
    },
    H: {
        word: "Humorous",
        description: "She is funny always cracking jokes, the most I laugh lately is I think when I'm in her presence, doesn't matter if it is online presence. I love this energy between us, we can laugh about anything and everything even ourselves and our problems.\n"
    },
    I: {
        word: "Independent",
        description: "In her own words, she is a strong, independent woman and I couldn’t agree more. Truly self-sufficient, everything she’s achieved has been through her own efforts, without any support. Her story is deeply inspiring to me.\n"
    },
    J: {
        word: "Joyful",
        description: "She brings a spark of joy to my day every time we talk, and that alone says it all. Her presence warms even the simplest moments, turning ordinary exchanges into bursts of happiness. It feels as if laughter follows her, and with just a few words, she can turn a grey day bright. Her joyful spirit is effortless and contagious, a gentle, radiant energy that lingers long after our conversations end.\n"
    },
    K: {
        word: "Kinetic",
        description: "Imene is energy personified. I sometimes envy the vitality she exudes. When she dances, it’s as if there’s no tomorrow. Her laughter is infectious, spreading energy across an entire room. Whatever she chooses to do, she does it with unmatched enthusiasm and passion.\n"
    },
    L: {
        word: "Lovable",
        description: "It’s impossible not to be drawn to her persona. Truly, she is utterly lovable. Like a moth to a flame, I find myself irresistibly attracted, even knowing the eventually I will end up getting burned. Even though I know where this journey may lead me, I remain helpless before the warmth and allure she radiates.\n"
    },
    M: {
        word: "Mysterious",
        description: "There is an undeniable aura of mystery that surrounds her. While most people may never notice, I sense she harbors feelings she keeps well hidden from the world, as if she wears an elegant mask. Sometimes, in the quiet between her words or the shadow behind her laughter, I catch glimpses of her true self  stories whispered silently in the depths of her eyes.\n"
    },
    N: {
        word: "Naughty",
        description: "Ahem ahem… behind that innocent face lies a delightfully mischievous mind. I won’t reveal too much here, but let’s just say she knows exactly what I mean 😉\n"
    },
    O: {
        word: "Outgoing",
        description: "She has a natural ability to connect with people everywhere she goes. Whether she’s striking up a conversation with a stranger or lighting up a group gathering with her presence, her friendliness instantly puts others at ease. She thrives in social settings, always eager to explore new places, meet new faces, and create memorable experiences along the way. Her outgoing nature makes every moment lively and unforgettable.\n"
    },
    P: {
        word: "Passionate",
        description: "I have rarely seen people with the kind of passion she possesses. Whatever she sets her heart on, be it her dreams, beliefs, or the people she cares about, she pursues it with unwavering intensity and enthusiasm.\n"
    },
    Q: {
        word: "Quirky",
        description: "She has her own wonderfully unique way of seeing the world, and it shows in everything she does. Whether it's her offbeat sense of humor, her unexpected ideas, or the little eccentricities that make her so memorable, she proudly embraces what sets her apart.\n"
    },
    R: {
        word: "Ray os Sunshine",
        description: "She can really brighten up a dull day just by being herself.\n"
    },
    S: {
        word: "Sensual",
        description: "She has all the charm and ahe has all the moves. If she had been born in ancient times, she could have given Cleopatra a run for her money! 😄\n"
    },
    T: {
        word: "Traveller",
        description: "As her Instagram bio whispers, \"Loves the journey,\" but words can barely hold the magic she finds beyond every unfamiliar horizon. Breeze tangled in her hair, new colors in her eyes, her spirit quietly gathering stories from riverbanks, night markets, and sun soaked mountain paths. With her, it’s never just about places on a map, but the soul of the road and the beauty found in wandering\n"
    },
    U: {
        word: "Unpredictable",
        description: "If I’m being honest, this is the quality that leaves me most unsettled. She wears unpredictability like a favorite perfume. Her moods shifting with the wind, her thoughts dancing like sunlight through shifting clouds. Just when I think I understand her, she surprises me, and the surprise is not always pleasant. Perhaps she loves this wild current, maybe it’s the heartbeat of adventure, the thrill of the unknown. I admit, for someone as steady and monotonous as me, it can be dizzying. But maybe that’s her gift, to show how beautiful it is to welcome a bit of the unexpected.\n"
    },
    V: {
        word: "Vixenly",
        description: "She moves with self assured grace, blending boldness with elegance, never afraid to be herself or command a room. With a clever wit and an irresistible presence, she can stir excitement in the ordinary, making every moment feel charged with possibility and intrigue.\n"
    },
    W: {
        word: "Wild",
        description: "Her spirit runs untamed, like wind racing through untrodden fields or waves crashing fiercely against open shores. There is a rawness to her laughter, a spark in her eyes that refuses boundaries or quiet domestication. Rules feel brittle in her presence; she is guided by instinct and the thrill of spontaneity. In her company, the world grows larger and less predictable\n"
    },
    X: {
        word: "Xtreme",
        description: "She lives pressed against the edge, where most would hesitate to step. Risk is her companion; caution, a word seldom spoken. With a spark of mischief in her eyes, she leaps first and questions later, savoring the adrenaline that pulses in the unknown. Every decision is a wildcard; spontaneous, unafraid, as if tomorrow is only an illusion and only this moment matters. Her life is a rushing current of now, fierce and brilliantly alive.\n"
    },
    Y: {
        word: "Yin and Yang",
        description: "If ever the concept of Yin and Yang could be embodied in a person, it would be her. She is the living balance of opposites: gentle yet strong, calm yet spirited, thoughtful yet adventurous. Her presence soothes and energizes in equal measure, offering comfort and excitement in turn. Like the classic symbol, she contains both light and shadow, each enhancing the other, creating a harmonious whole. In her, you find the balance that the world seeks: a perfect blend of complementary forces, seamlessly united.\n"
    },
    Z: {
        word: "Zealous",
        description: "With unwavering dedication and a vigorous spirit, she pursues life fiercely, fueled by conviction and an unshakable belief in what matters most to her\n"
    }
};

export default function LetterPage() {
    const {letter} = useParams();
    const upperLetter = letter.toUpperCase();
    const entry = dictionary[upperLetter];

    const imageUrl = "https://via.placeholder.com/200?text=" + (entry?.word || letter);
    const letters = Object.keys(dictionary);

    return (
        <>
            <UniverseBackground/>

            <div
                className="letter-page"
                style={{
                    minHeight: "100vh",
                    minWidth: "100vw",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column", // Changed to column layout
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fafbfc",
                    boxSizing: "border-box",
                    padding: "1rem", // Reduced padding
                    gap: "1.5rem", // Add spacing between elements
                }}
            >
                <div className="letter-content" style={{zIndex: 1}}>
                    <div className="text-content">
                        <p className="letter-title">Letter: {upperLetter}</p>
                        <p className="word-display">
                            <strong>{entry?.word || "Not found"}</strong>
                        </p>
                        <p className="word-description">
                            {entry?.description || "No description available."}
                        </p>
                    </div>
                    <div className="image-container">
                        <img src={imageUrl} alt={entry?.word} className="word-image"/>
                    </div>
                </div>

                <div className="letter-links" style={{zIndex: 1}}>
                    {letters.map((ltr) => (
                        <Link key={ltr} to={`/letter/${ltr}`} className="letter-link">
                            {ltr}
                        </Link>
                    ))}
                </div>

                <div className="back-link" style={{zIndex: 1}}>
                    <Link to="/welcome">← Back to Welcome Page</Link>
                </div>
            </div>
        </>

    );
}