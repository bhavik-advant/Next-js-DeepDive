import Link from "next/link";

export default function NewsPage(){
    return (
        <>
            <h1>The News Page</h1>
            <ul>
                <p>--------------------------</p>
                <li><Link href="news/next-js-article">NextJS is a great framework</Link></li>
                <p>--------------------------</p>
                <li> <Link href="news/react-js-article">ReactJS is a great library</Link></li>
            </ul>
        </>
    )
}