import SideBar from "./_components/SideBar";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className="hidden md:block md:w-64">
                <SideBar />
            </div>
            <div className="md:ml-64 p-10">
                {children}
            </div>
        </div>
    );
}
