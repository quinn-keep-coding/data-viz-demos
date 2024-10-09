"use client";
import React from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Something went wrong!</h1>
                <p className="mt-4">{error.message}</p>
                <button
                    onClick={reset}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}