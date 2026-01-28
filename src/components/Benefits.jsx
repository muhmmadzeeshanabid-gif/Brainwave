import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "../constants/design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      {/* SVG ClipPath MUST be rendered ONCE at the top level, outside of maps */}
      {/* This ensures the clipPath definitions are available globally in production */}
      <ClipPath />

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
                // Use absolute public path or import for production-safe image loading
                backgroundImage: item.backgroundUrl
                  ? `url(${item.backgroundUrl})`
                  : "none",
                backgroundSize: "100% 100%",
              }}
            >
              {/* Card Content Layer - above clipped background */}
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

              {/* Gradient Light Overlay - only for special cards */}
              {item.light && <GradientLight />}

              {/* Inner Clipped Background - creates the "border" effect via clipPath */}
              {/* z-1 ensures this is below content (z-2) but above outer border */}
              <div
                className="absolute inset-0.5 bg-n-8 z-1 overflow-hidden"
                style={{
                  // clipPath creates the rounded border effect in production
                  clipPath: "url(#benefits)",
                }}
              >
                {/* Optional: Hover image overlay inside clipped area */}
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
