import {Link} from "react-router-dom";
import {
    Box,
    Typography,
    Paper,
    Grid,
    Card,
    CardActionArea,
} from "@mui/material";
import "./WelcomePage.css";
import UniverseBackground from "./UniverseBackground";

export default function WelcomePage() {
    const letters = Array.from({length: 26}, (_, i) =>
        String.fromCharCode(65 + i)
    );

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingY: {xs: 3, md: 6},
                overflowX: "hidden",
                boxSizing: "border-box",
            }}
        >
            <UniverseBackground/>
            <Paper
                elevation={9}
                sx={{
                    maxWidth: 650,
                    width: {xs: "95%", sm: "90%", md: "85%"}, // More responsive width
                    padding: {xs: 2, sm: 3, md: 5}, // Smaller padding on mobile
                    borderRadius: {xs: 3, sm: 4, md: 5}, // Smaller border radius on mobile
                    position: "relative",
                    zIndex: 1,
                    background:
                        "linear-gradient(120deg, rgba(255,255,255,0.98) 70%, #f3f6fd 100%)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
                    margin: "auto", // This ensures centering inside flex-parent
                    overflowX: "hidden", // Prevent horizontal overflow
                    boxSizing: "border-box", // Include padding in width calculation
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 900,
                        color: "#3260a8",
                        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        textAlign: "center",
                        fontSize: {xs: "1.8rem", sm: "2.2rem", md: "2.5rem"}, // Responsive font size
                        wordBreak: "break-word", // Prevent overflow on small screens
                    }}
                >
                    Welcome to the Imene Dictionary App
                </Typography>
                <Typography
                    variant="body1"
                    className="description"
                    gutterBottom
                    sx={{
                        fontSize: {xs: "0.95rem", sm: "1.05rem", md: "1.13rem"}, // Responsive font size
                        color: "#3a4662", 
                        textAlign: "center",
                        lineHeight: 1.6,
                        px: {xs: 1, sm: 2}, // Add padding on smaller screens
                    }}
                >
                    {/* Replace <br/> tags with paragraphs for better responsive layout */}
                    <p>Step into the <b>Imene Dictionary 📖</b>—a whimsical alphabet adventure!</p>
                    <p>From A to Z, each letter opens the door to a word that captures a special trait, quirk, or
                    unforgettable essence of Imene.</p>
                    <p>This isn't just a list, it's a playful journal: a one-of-a-kind glimpse of how I see Imene, letter
                    by letter, moment by moment.</p>
                    <p><b>Ready to explore her world through my eyes?</b> Start your journey—just pick a letter!</p>
                </Typography>

                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        marginTop: {xs: 1, sm: 2},
                        marginBottom: {xs: 0.5, sm: 1},
                        fontWeight: 600,
                        color: "#274472",
                        textAlign: "center",
                        fontSize: {xs: "1.1rem", sm: "1.3rem", md: "1.5rem"}, // Responsive font size
                    }}
                >
                    Click on a letter to begin:
                </Typography>
                <Grid
                    container
                    spacing={{xs: 1, sm: 1.5, md: 2}} // Responsive spacing
                    justifyContent="center"
                    className="letter-grid"
                    sx={{
                        maxWidth: "100%", // Prevent overflow
                        mx: "auto", // Center the grid
                        px: {xs: 0.5, sm: 1}, // Add padding on smaller screens
                    }}
                >
                    {letters.map((letter) => (
                        <Grid item key={letter}>
                            <Card
                                sx={{
                                    minWidth: {xs: 44, sm: 54}, // Smaller on mobile
                                    height: {xs: 44, sm: 54}, // Smaller on mobile
                                    borderRadius: 3,
                                    boxShadow: "0 1px 8px rgba(50, 96, 168, 0.08)",
                                    transition: "transform 0.12s, box-shadow 0.12s",
                                    "&:hover": {
                                        transform: "scale(1.08)",
                                        boxShadow: "0 4px 18px rgba(50, 96, 168, 0.16)",
                                    },
                                    "&:active": { // Better touch feedback
                                        transform: "scale(0.95)",
                                        background: "#e3f2fd",
                                    },
                                    background: "linear-gradient(120deg, #f4fafe 70%, #e3f2fd 100%)",
                                }}
                                elevation={3}
                            >
                                <CardActionArea
                                    component={Link}
                                    to={`/letter/${letter}`}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        fontSize: {xs: "1.2rem", sm: "1.45rem"}, // Smaller on mobile
                                        color: "#3260a8",
                                        fontWeight: "bold",
                                        letterSpacing: 1,
                                        fontFamily: "system-ui, monospace", // More widely available fonts
                                        borderRadius: 3,
                                    }}
                                >
                                    {letter}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
}
