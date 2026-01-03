import Header from "@/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const user = null; // ya auth se lao

    return (
        <html lang="en">
        <body>
        <Header user={user} />
        {children}
        </body>
        </html>
    );
}
