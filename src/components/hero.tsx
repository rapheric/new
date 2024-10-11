import DashLayout from "../admin/Layout/dashboardLayout"
import Feature from "./heroComponents/feature"
import Logistic from "./heroComponents/logistics"
import Objective from "./heroComponents/objective"
import Solution from "./heroComponents/solutions"

const Hero = () => {
    return (
        <div className="pt-16">
          <Solution/>
          <Feature/>
          <Logistic/>
          <Objective/>
          <DashLayout/>
        </div>
    )
}

export default Hero