import { useEffect, useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
    address: "Some address, 12345, City",
    description: "This is my First Meet Up!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
    address: "Some address, some City",
    description: "This is my Second Meet Up!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
    address: "Some address, 12345, City",
    description: "This is my Third Meet Up!",
  },
];
function HomePage(props) {
  return <MeetUpList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
