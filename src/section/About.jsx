import { Code2, Rocket, User, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "welcome to my code section and  welcome to my code section and ",
  },

  {
    icon: Rocket,
    title: "Performance",
    discriptions:
      "welcome to my code section and  welcome to my code section and ",
  },
  {
    icon: User,
    title: "Collarbration",
    discriptions:
      "welcome to my code section and  welcome to my code section and ",
  },
  {
    icon: Lightbulb,
    title: "Inovention",
    discriptions:
      "welcome to my code section and  welcome to my code section and ",
  },
];

export const About = () => {
  return (
    <section id="about" className=" py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
             Passionate about learning,
              <span className="font-serif italic font-normal text-white">
               
              building. growing as a MERN Dev.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate MERN Full Stack Web Developer and a fresher in
                the field, eager to build modern, responsive, and user-friendly
                web applications. My journey into web development began with a
                strong curiosity about how websites work and has grown into
                hands-on experience with full stack technologies.
              </p>
              <p>
                I specialize in MongoDB, Express.js, React, and Node.js, and
                enjoy creating dynamic frontend interfaces as well as robust
                backend APIs. I focus on writing clean code, following best
                practices, and continuously improving my problem-solving skills.
              </p>
              <p>
                As a dedicated learner, I spend my time exploring new tools,
                building personal projects, and strengthening my understanding
                of full stack development to grow as a professional developer.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                I am motivated to contribute to real-world projects, collaborate
                with experienced developers, and continuously enhance my skills
                to become a successful MERN Full Stack Web Developer.
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
