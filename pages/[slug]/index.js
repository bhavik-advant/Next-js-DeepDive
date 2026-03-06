import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from 'mongodb';
import Head from "next/head";
export default function MeetupDetailPage(props) {
  return (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description} />
    </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  )

}

export async function getStaticPaths() {

  const client = await MongoClient.connect('mongodb+srv://bhavik-nextjs-intro:AdvantNextjs1@cluster0.yekvnle.mongodb.net/?appName=Cluster0');
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        slug: meetup._id.toString()
      }
    }
    ))
  }
}

export async function getStaticProps(context) {

  //fetch data for a single meetup

  const meetupId = context.params.slug;

  const client = await MongoClient.connect('mongodb+srv://bhavik-nextjs-intro:AdvantNextjs1@cluster0.yekvnle.mongodb.net/?appName=Cluster0');
  const db = client.db();

  const meetupCollections = db.collection('meetups');

  const selectedMeetup = await meetupCollections.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  // console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    }
  }
}