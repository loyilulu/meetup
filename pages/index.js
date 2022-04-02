import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const dummy_meetup = [
  {
    id: "m1",
    title: "Gamla Stan",
    image:
      "https://www.planetware.com/wpimages/2021/01/sweden-stockholm-top-attractions-explore-old-town-stockholm-gamla-stan.jpg",
    address: "gamla stan",
    description: "Old town in centeral stockholm",
  },
  {
    id: "m2",
    title: "Vasa Museum",
    image:
      "https://www.planetware.com/photos-large/S/sweden-stockholm-vasa.jpg",
    address: "gamla stan",
    description: "An amazing salvage operation took place in 1961",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send http request to fetch data
    // call setMeetup - set the meetup loaded from server as the meetup
    setLoadedMeetups(dummy_meetup);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export function getStaticProps() {}

export default HomePage;
