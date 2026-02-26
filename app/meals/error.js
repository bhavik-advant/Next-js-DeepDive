"use client"
export default function ErrorPage({error}) {
    return (
        <main className="error">
            <h1>AN error occurred!</h1>
            <p>Failed to fetch meal data. Please try again later.</p>
        </main>
    )
}