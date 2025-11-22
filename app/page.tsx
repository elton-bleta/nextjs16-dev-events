import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

const Home = () => {
  console.log("timeee:1:41:36");
  return (
    <section>
      <h1 className="text-center">
        The Event that Every Developer <br /> Can&apos;t Miss It
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in one Place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
