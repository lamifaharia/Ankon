import SectionTitle from "../common/SectionTitle";

const Story = () => {
  return (
    <section
      id="story"
      className="py-32 px-6 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          chapter="Chapter 01"
          title="Where It All Began"
          subtitle="Before all the photos, all the jokes, and all the memories... there was one day at university when I met someone who would become my Bhai."
        />

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
          <p className="text-lg md:text-xl text-gray-300 leading-10 text-center">
            We met at university.
            <br /><br />
            I had no idea that my first friend there would become such an important part of my life.
            <br /><br />
            Somehow, through countless conversations, laughter, arguments, and unforgettable moments...
            <br /><br />
            you became more than a friend.
            <br /><br />
            You became my Bhai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;