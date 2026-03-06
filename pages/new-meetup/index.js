import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetUpPage(){
    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData){
        // console.log(enteredMeetupData);
        const response = await fetch('/api/new-meetup' , {
            method : 'POST',
            body : JSON.stringify(enteredMeetupData),
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        const data = await response.json();

        console.log(data);
        router.push('/');
        
    }
    return (
        <>
        <Head>
        <title>Add a new Meetup</title>
        <meta name="description" content="Browse a huge list of highly active react meetups!" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </>
    )
}