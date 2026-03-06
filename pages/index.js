// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import {MongoClient} from 'mongodb';
import Head from 'next/head';

// const DUMMY_MEETUPS = [
//     {
//         id : 'm1',
//         title: 'A First Meetup',
//         image : 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg',
//         address : 'Some address react streets , flutter chock',
//     },
//     {
//         id : 'm2',
//         title: 'A Second Meetup',
//         image : 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg',
//         address : 'Some address react Second streets ,  flutter chock',
//     },
//     {
//         id : 'm3',
//         title: 'A Third Meetup',
//         image : 'https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg',
//         address : 'Some address react Third streets , flutter chock',
//     },
// ]

export default function HomePage(props){
    // const [loadedMeetups , setLoadedMeetups] = useState([]);
    // useEffect(()=>{
    //     // send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // },[])
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active react meetups!" />
            </Head>
            <MeetupList meetups={props.meetups}/>
    
        </>
    )
}

export async function getStaticProps(){
    //fetch data from a API
    // fetch('api/meetups')
    const client = await MongoClient.connect('mongodb+srv://bhavik-nextjs-intro:AdvantNextjs1@cluster0.yekvnle.mongodb.net/?appName=Cluster0');
    const db = client.db();

    const meetupCollections = db.collection('meetups');

    const meetups = await meetupCollections.find().toArray();

    client.close();
    return {
        props : {
            meetups : meetups.map((meetup)=> ({
                title : meetup.title,
                address : meetup.address,
                image : meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate : 1,
    }
};


// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     //fetch data from an API
//     return{
//         props : {
//             meetups : DUMMY_MEETUPS
//         },
//     }
// }

