import starSvg from '../assets/imgs/Star.svg';
import moonSvg from '../assets/imgs/moon.svg';
import flatCloudSvg from '../assets/imgs/FlatCloud.svg';
import roundCloudSvg from '../assets/imgs/RoundCloud.svg';
import ltDarkCloudSvg from '../assets/imgs/LtPurpleCloud.svg';
import dkDarkCloudSvg from '../assets/imgs/DkPurpleCloud.svg';
import { useTheme } from "../context/ThemeContext";

function Background() {
  const { theme } = useTheme();
  return (
    <>
     <div className="app-background decorative-stars">
      {theme === "dark" ? (
        <>
          <img src={starSvg} alt="" className="star star-1"/>
          <img src={moonSvg} alt="" className="star star-2"/>
          <img src={starSvg} alt="" className="star star-3"/>
          <img src={starSvg} alt="" className="star star-4"/>
          <img src={starSvg} alt="" className="star star-5"/>
          <img src={starSvg} alt="" className="star star-6"/>
          <img src={starSvg} alt="" className="star star-7"/>
          <img src={ltDarkCloudSvg} alt="" className="star star-8"/>
          <img src={ltDarkCloudSvg} alt="" className="star star-9"/>
          <img src={dkDarkCloudSvg} alt="" className="star star-10"/>
          <img src={dkDarkCloudSvg} alt="" className="star star-11"/>
          <img src={ltDarkCloudSvg} alt="" className="star star-12"/>
          <img src={dkDarkCloudSvg} alt="" className="star star-13"/>
          <img src={dkDarkCloudSvg} alt="" className="star star-14"/>
        </>
      ) : (
        <>
          <img src={flatCloudSvg} alt="" className="star star-1"/>
          <img src={roundCloudSvg} alt="" className="star star-2"/>
          <img src={flatCloudSvg} alt="" className="star star-3"/>
          <img src={roundCloudSvg} alt="" className="star star-4"/>
          <img src={flatCloudSvg} alt="" className="star star-5"/>
          <img src={roundCloudSvg} alt="" className="star star-6"/>
          <img src={flatCloudSvg} alt="" className="star star-7"/>
        </>
      )}
      </div>
    </>
  );
}

export default Background;