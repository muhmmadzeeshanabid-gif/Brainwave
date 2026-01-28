import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "../constants/design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] overflow-hidden"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              {/* content */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* gradient light */}
              {item.light && <GradientLight />}

              {/* inner clipped background (border safe) */}
              <div
                className="absolute inset-0.5 bg-n-8 z-1 overflow-hidden"
                style={{
                  clipPath:
                    "path('M8% 0 H92% C97% 0 100% 6% 100% 12% V88% C100% 94% 97% 100% 92% 100% H8% C3% 100% 0 94% 0 88% V12% C0 6% 3% 0 8% 0 Z')",
                }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
