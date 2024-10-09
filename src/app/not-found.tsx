import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Page Not Found</h1>
                <p className="mt-4">Sorry, we couldn’t find the page you’re looking for.</p>
                <Link href="/">
                    <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                        Go back home
                    </a>
                </Link>
            </div>
        </div>
    );
}