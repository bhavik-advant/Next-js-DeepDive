import { useRouter } from "next/router"


export default function DetailPage(){
    const router = useRouter();
    // console.log(router.query.slug);
    const slug = router.query.slug;
    // send a req to the backend API
    // to fetch the news item with slug
    return (
        <>
            <h1>The Detail Page</h1>
        </>
    )
}