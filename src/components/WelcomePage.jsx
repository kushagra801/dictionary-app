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
                width: "100vw",
                height: "100vh",
                minHeight: "100vh",
                minWidth: "100vw",
                background: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingY: {xs: 3, md: 6},
            }}
        >
            <UniverseBackground/>
            <Paper
                elevation={9}
                sx={{
                    maxWidth: 650,
                    width: "90vw",
                    padding: {xs: 3, sm: 5},
                    borderRadius: 5,
                    position: "relative",      // ADD THIS
                    zIndex: 1,
                    background:
                        "linear-gradient(120deg, rgba(255,255,255,0.98) 70%, #f3f6fd 100%)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.13)",
                    margin: "auto", // This ensures centering inside flex-parent
                }}
            >
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 900,
                        color: "#3260a8",
                        fontFamily: "cursive",
                        textAlign: "center",
                    }}
                >
                    Welcome to the Imene Dictionary App
                </Typography>
                <Typography
                    variant="body1"
                    className="description"
                    gutterBottom
                    sx={{fontSize: "1.13rem", color: "#3a4662", textAlign: "center"}}
                >
                    Step into the <b>Imene Dictionary 📖</b>—a whimsical alphabet adventure!<br/>
                    From A to Z, each letter opens the door to a word that captures a special trait, quirk, or
                    unforgettable essence of Imene.<br/>
                    This isn’t just a list, it’s a playful journal: a one-of-a-kind glimpse of how I see Imene, letter
                    by letter, moment by moment.<br/>
                    <br/>
                    <b>Ready to explore her world through my eyes?</b> Start your journey—just pick a letter!
                </Typography>

                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        marginTop: 2,
                        marginBottom: 1,
                        fontWeight: 600,
                        color: "#274472",
                        textAlign: "center",
                    }}
                >
                    Click on a letter to begin:
                </Typography>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    className="letter-grid"
                >
                    {letters.map((letter) => (
                        <Grid item key={letter}>
                            <Card
                                sx={{
                                    minWidth: 54,
                                    height: 54,
                                    borderRadius: 3,
                                    boxShadow: "0 1px 8px rgba(50, 96, 168, 0.08)",
                                    transition: "transform 0.12s, box-shadow 0.12s",
                                    "&:hover": {
                                        transform: "scale(1.08)",
                                        boxShadow: "0 4px 18px rgba(50, 96, 168, 0.16)",
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
                                        fontSize: "1.45rem",
                                        color: "#3260a8",
                                        fontWeight: "bold",
                                        letterSpacing: 1,
                                        fontFamily: "monospace",
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