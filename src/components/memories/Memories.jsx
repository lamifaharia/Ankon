import SectionTitle from "../common/SectionTitle";
import MemoryCard from "./MemoryCard";
import reasons from "../../data/reasons";

const Memories = () => {
  return (
    <section id ="memories" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          chapter="Chapter 03"
          title="Why You're My Bhai"
          subtitle="Some things are difficult to say out loud, so I decided to write them here."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason, index) => (
            <MemoryCard
              key={reason.id}
              reason={reason}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Memories;