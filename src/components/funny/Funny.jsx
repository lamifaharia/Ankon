import SectionTitle from "../common/SectionTitle";
import FunnyCard from "./FunnyCard";
import funny from "../../data/funny";

const Funny = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          chapter="Chapter 04"
          title="Our Dumbest Moments"
          subtitle="If anyone else saw these memories, they'd probably think we're completely insane."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {funny.map((item, index) => (
            <FunnyCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Funny;