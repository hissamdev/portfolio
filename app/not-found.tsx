import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex items-center justify-center text-center ">
            <div>
                <h1 className="text-2xl font-bold">404 | The page or resource was not found.</h1>
                <Button asChild size="lg" className="mt-5">
                    <Link href="/">Return to home</Link>
                </Button>
            </div>
        </div>
    )
}