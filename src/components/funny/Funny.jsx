import SectionTitle from "../common/SectionTitle";
import FunnyCard from "./FunnyCard";
import funny from "../../data/funny";
import Reveal from "../common/Reveal";

const Funny = () => {
  return (
    <Reveal>
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          chapter="Chapter 04"
          title="Our Dumbest Moments"
          subtitle="If anyone ever saw us together or heard our conversations, they'd probably be convinced that we're completely INSANE"
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
    </Reveal>
  );
};

export default Funny;