import SideBar from "./_components/SideBar";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <SideBar />
            {children}
        </>
    );
}
