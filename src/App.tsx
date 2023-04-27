import "./styles.css";
import { StyledDiv } from "./Style";

export default function App() {
  return (
    <StyledDiv>
      <div className="map-background">
        <div className="map-overlay"></div>
        <iframe
          src="https://embed.windy.com/embed2.html?lat=45.685&lon=-2.076&detailLat=49.110&detailLon=10.503&width=1000&height=700&zoom=9&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
          frameborder="0"
        ></iframe>
      </div>
    </StyledDiv>
  );
}
