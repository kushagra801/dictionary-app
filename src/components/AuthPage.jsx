import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function AuthPage({onAuth}) {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const correctCode = "YOUNG4EVER"; // Set your code here

    const handleSubmit = () => {
        if (code === correctCode) {
            onAuth();
            navigate("/welcome");
        } else {
            setError("Incorrect code");
        }
    };

    return (
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h2
                style={{
                    color: "#fa0080",              // your desired color
                    background: "none",            // remove background gradient
                    WebkitTextFillColor: "#fa0080",// reset -webkit-text-fill-color
                    WebkitBackgroundClip: "initial",// reset background-clip on Webkit
                    backgroundClip: "initial"      // reset background-clip for Firefox
                }}
            >
                Enter Access Code to see what's within
            </h2>

            <input
                type="password"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
            />
            <br/>
            <button onClick={handleSubmit} style={{marginTop: "10px"}}>Enter</button>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
}
