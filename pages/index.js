import Head from 'next/head'
import Link from 'next/link';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

// firebase
import { db } from '../utils/firebase';

// components
import Message from '../components/Message'
import React from 'react';

export default function Home() {
  const [allPosts, setAllPosts] = React.useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe;
  }

  React.useEffect(() => {
    getPosts();
  }, [])

  console.log({allPosts})

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-12 text-lg font-medium">
        <h2>See what other people are saying</h2>
        {allPosts.map((post) => (
          <Message key={post.id} {...post}>
            <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
              <button>
                {post.comments?.length > 0 ? post.comments?.length : 0} comments
              </button>
            </Link>
          </Message>
        ))}
      </div>
    </div>
  )
}
