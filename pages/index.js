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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  //fetch data from API
  return {
    props: { meetups: dummy_meetup },
  };
}

export default HomePage;
