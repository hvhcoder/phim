import Header from "@/components/layout/Header";

export default function MainLayouy({children}:{children:React.ReactNode}) {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto mt-2 py-2 w-full">
                {children}
            </div>
        </div>
    )
}