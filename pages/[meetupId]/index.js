import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg"
      title="First Meetup"
      address="Some place, some city"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d6/St_Peter%27s_Square%2C_Vatican_City_-_April_2007.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street, some city",
        description: "This is a test",
      },
    },
  };
}

export default MeetupDetails;
