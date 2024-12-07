import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import Nav from "../components/Nav";
import {PrimeReactProvider} from "primereact/api";
import Wrapper from "@/app/components/Wrapper";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Anime DB",
    description: "Anime DB",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        <PrimeReactProvider>
            <Wrapper>
                <Nav/>
                {children}
            </Wrapper>
        </PrimeReactProvider>
        </body>
        </html>
    );
}