import Image from "next/image";
import { Shiba } from "./components/shiba";

export default function Home() {
    return (
        <main style={{ width: "100vw", height: "100vh" }}>
            <Shiba />
        </main>
    );
}
