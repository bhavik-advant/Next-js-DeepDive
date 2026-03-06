import {MongoClient} from 'mongodb';

async function handler(req , res){
    if(req.method === 'POST'){
        const data = req.body;

        // const {title , image , address , description} = data;

        const client = await MongoClient.connect('mongodb+srv://bhavik-nextjs-intro:AdvantNextjs1@cluster0.yekvnle.mongodb.net/?appName=Cluster0')
        const db = client.db();

        const meetupCollections = db.collection('meetups');
        const result = await meetupCollections.insertOne(data);

        console.log(result);
        client.close();

        res.status(201).json({message : 'Meetup inserted!'})
    }
}

export default handler;