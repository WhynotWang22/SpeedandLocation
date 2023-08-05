import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
import { getSvgSize } from "../AppConstan"
const Kimdongho = (props: SvgProps) => (
  <Svg
    viewBox="0 0 36 126"
    fill="none"
    {...props}
    {...getSvgSize(36, 126, props.width)}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.8583 8.70816L0.0196009 112.422C-0.3726 119.389 5.17105 125.253 12.1488 125.253C15.8262 125.253 19.7684 125.253 23.4457 125.253C30.4235 125.253 35.9671 119.389 35.5749 112.422L29.7362 8.70817C29.4611 3.82158 25.4184 1.21729e-05 20.524 1.21729e-05C18.7209 1.21729e-05 16.8736 0 15.0705 0C10.1762 0 6.13339 3.82157 5.8583 8.70816Z"
      fill="url(#paint0_linear_0_8)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_0_8"
        x1={17.7973}
        y1={0}
        x2={17.7973}
        y2={125.253}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FCA4FF" />
        <Stop offset={1} stopColor="#2D144E" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Kimdongho
