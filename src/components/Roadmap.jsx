import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Button from "./Button";
import TagLine from "./Tagline";
import { Gradient } from "../constants/design/Roadmap";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we're working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15">
                  {/* background grid */}
                  <div className="absolute top-0 left-0 w-full">
                    <img src={grid} alt="Grid" className="w-full" />
                  </div>

                  <div className="relative z-1">
                    {/* top bar */}
                    <div className="flex items-center justify-between mb-8">
                      <TagLine>{item.date}</TagLine>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          className="mr-2.5"
                          width={16}
                          height={16}
                        />
                        <span className="tagline">{status}</span>
                      </div>
                    </div>

                    {/* image */}
                    <div className="mb-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full"
                      />
                    </div>

                    {/* content */}
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>

        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
