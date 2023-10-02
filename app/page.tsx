import { Shiba } from "./components/shiba";
import { Box } from "@mui/material";

export default function Home() {
    return (
        <main>
            <div
                style={{
                    display: "flex",
                    maxHeight: 500,
                    maxWidth: "100%",
                    padding: 10,
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Shiba />
            </div>
        </main>
    );
}
