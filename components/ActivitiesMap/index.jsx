import SectionTitle from "../SectionTitle";
import style from "./ActivitiesMap.module.scss";
import { useState, useEffect, useRef } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchMapData } from "../../store/actions";

export default function ActivitiesMap() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mapData);
  const [showPopup, setShowPopup] = useState(true);

  const [coor, setCoor] = useState({
    latitude: null,
    longitude: null,
  });

  const [status, setStatus] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus("located");
          setCoor({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    coor.latitude != null && dispatch(SearchMapData(coor));
  }, [coor]);
  /*
  useEffect(() => {
   console.log(data.data)
  }, [data]);
  */

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className={style.container}>
      <SectionTitle
        title="Eventi nelle vicinanze"
        showBtn={false}
        description=""
      />

      <div className={style.wrapper}>
        {status != "located" ? (
          <>
            <button onClick={getLocation}>CLICCAMI</button>
            <p>Clicca Qui e consenti La Geolocalizzazione</p>
          </>
        ) : (
          coor.latitude && (
            <>
              <Map
                initialViewState={{
                  latitude: coor.latitude,
                  longitude: coor.longitude,
                  zoom: 14,
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken="pk.eyJ1IjoiZGFyaW8wMSIsImEiOiJja3pxd3Z5emszd2U3MnFucmY0MjhjcXNmIn0.wDD6isH55l8WG5XtPgDNkg"
              >
                {data &&
                  data.data.map((activity) => (
                    <>
                      <Marker
                        key={activity.uuid}
                        longitude={activity.longitude}
                        latitude={activity.latitude}
                        index={activity.uuid}
                        onClick={() => console.log("s")}
                      >
                        <img
                          width={30}
 
                          className={style.marker}
                          src="../../logo-airplane.png"
                        />
                      </Marker>

                    </>
                  ))}
                )
          
              </Map>
            </>
          )
        )}
      </div>
    </div>
  );
}
