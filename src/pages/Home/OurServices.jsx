import cardIcon1 from "../../assets/images/services/card-icon1.png";
import cardIcon2 from "../../assets/images/services/card-icon2.png";
import card1 from "../../assets/images/services/card1.png";
import card2 from "../../assets/images/services/card2.png";
import card3 from "../../assets/images/services/card3.png";
import card4 from "../../assets/images/services/card4.png";
import card5 from "../../assets/images/services/card5.png";
import card6 from "../../assets/images/services/card6.png";

const services = [
  {
    title: "Complete Blood Count (CBC)",
    bg: "#FAF6ED",
    textColor: "#2C2C2C",
    icon: cardIcon1,
    cardImg: card1,
    learnColor: "#2c2c2c",
  },
  {
    title: (
      <>
        Mobile Blood <br /> Draws
      </>
    ),
    bg: "#C9A14A",
    textColor: "#2C2C2C",
    icon: cardIcon1,
    cardImg: card2,
    learnColor: "#2c2c2c",
  },
  {
    title: "Injection & Therapeutics",
    bg: "#2C2C2C",
    textColor: "#ffffff",
    icon: cardIcon2,
    cardImg: card3,
    learnColor: "#ffffff",
  },
  {
    title: (
      <>
        TRT <br /> Service
      </>
    ),
    bg: "#FAF6ED",
    textColor: "#2C2C2C",
    icon: cardIcon1,
    cardImg: card4,
    learnColor: "#2c2c2c",
  },
  {
    title: (
      <>
        Diabetes <br /> Panel
      </>
    ),
    bg: "#C9A14A",
    textColor: "#2C2C2C",
    icon: cardIcon1,
    cardImg: card5,
    learnColor: "#2c2c2c",
  },
  {
    title: (
      <>
        Mobile Blood <br /> Draws
      </>
    ),
    bg: "#2C2C2C",
    textColor: "#ffffff",
    icon: cardIcon2,
    cardImg: card6,
    learnColor: "#ffffff",
  },
];

export const OurServices = () => {
  return (
    <section className="py-16 mb-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-xl text-gray-900 pt-2 max-w-3xl mx-auto">
          Comprehensive blood testing services available at your home with{" "}
          <br />
          professional care and accurate results.
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-14 grid grid-cols-2 gap-10 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex justify-between border-x border-t border-b-8 border-[#2c2c2c] drop-shadow-md rounded-[45px] p-14 h-[308px]"
            style={{ background: service.bg }}
          >
            <div className="flex flex-col justify-between">
              <p
                className="font-medium text-3xl"
                style={{ color: service.textColor }}
              >
                {service.title}
              </p>
              <div className="flex items-center gap-4">
                <img src={service.icon} alt="" />
                <p className="text-xl" style={{ color: service.learnColor }}>
                  Learn more
                </p>
              </div>
            </div>
            <img src={service.cardImg} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};
