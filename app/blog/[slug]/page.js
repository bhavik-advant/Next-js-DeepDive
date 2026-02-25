export default function BlogPostPage({params}){
    return (
        <main>
            <h1>blog post </h1>
            <p>{params.slug}</p>
        </main>
    )
}