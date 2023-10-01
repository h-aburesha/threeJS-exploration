import Image from "next/image";
import { Shiba } from "./components/shiba";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Shiba /> // rename it to your component here
        </main>
    );
}
