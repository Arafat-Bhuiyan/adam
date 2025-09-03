import trust1 from "../../assets/images/trust1.png"
import trust2 from "../../assets/images/trust2.png"
import trust3 from "../../assets/images/trust3.png"
import trust4 from "../../assets/images/trust4.png"
import trust5 from "../../assets/images/trust5.png"

export function TrustSection() {

  return (
    <section className="bg-[#FDFCF8] py-16 mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Trusted by Healthcare Leaders</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-items-center">
            <img src={trust1} alt="" />
            <img src={trust2} alt="" />
            <img src={trust3} alt="" />
            <img src={trust4} alt="" />
            <img src={trust5} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
