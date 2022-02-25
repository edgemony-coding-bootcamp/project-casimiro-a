
import { useState, useEffect, useRef } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchMapData } from "../../store/actions";
import { useTranslation } from "react-i18next";
import '../../translations/i18n';
import ActivityCard from "../ActivityCard";
import SectionTitle from "../SectionTitle";
import Image from 'next/image';
import style from "./ActivitiesMap.module.scss";

export default function ActivitiesMap() 
{
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.mapData);
  const [act, setAct] = useState(null);
  const [range, setRange] = useState(50);
  const [showModale, setShowModale] = useState(false);

  const [coor, setCoor] = useState({
    latitude: null,
    longitude: null,
    range: 50,
  });


  const [status, setStatus] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus(t('activitiesMap_status_notSupported'));
    } else {
      setStatus(t('activitiesMap_status_locating'));
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus('located');
          setCoor({
            ...coor,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setStatus(t('activitiesMap_status_error'));
        }
      );
    }
  };

  useEffect(() => {
    coor.latitude != null && dispatch(SearchMapData(coor));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coor]);


  useEffect(() => {
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(e) {
    setAct(data.data.filter((data) => data.uuid === e.target.id));
    setShowModale(true);

  }
  function handleChange(e) {
    setRange(e.target.value);
  }
  function handleRange(e) {
    setCoor({...coor, range: e.target.value});
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        <SectionTitle
            title={t('activitiesMap_section_title')}
            showBtn={false}
            description={t('activitiesMap_section_description')}
          />
      </div>

      <div className={style.wrapper}>
        {status != "located" ? (
          <>
            <p>{status}</p>
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
                    <Marker
                      key={activity.uuid}
                      longitude={activity.longitude}
                      latitude={activity.latitude}
                      index={activity.uuid}
                      anchor="bottom"
                    >
                      <Image
                        id={activity.uuid}
                        alt={activity.title}
                        width={42}
                        height={60}
                        onClick={(e) => handleClick(e)}
                        className={style.marker}
                        src="../../map-pin.png"
                      />
                    </Marker>
                  ))}
                )
              </Map>
              { act && (
                <div className={`${style.modale} ${showModale && style.open}`}>
                  <ActivityCard
                    image={act[0].cover_image_url}
                    title={act[0].title}
                    text={act[0].description}
                    price={act[0].retail_price.formatted_value}
                    url={`/esperienze/${act[0].uuid}`}
                  />
                  <button
                    className={style.closeBtn}
                    onClick={() => setShowModale(false)}
                  >
                    {t('activitiesMap_modal_button')}
                  </button>
                </div>
              )}
            </>
          )
        )}
        <div className={style.inputRaggio}>
          <label htmlFor="search-range">
            {t('activitiesMap_input_range')} <span>{range}</span> Km{" "}
          </label>
          <input
            type="range"
            name="search-range"
            id="search-range"
            value={range}
            min="1"
            max="200"
            onChange={handleChange}
            onMouseUp={handleRange}
          />
        </div>
      </div>
    </div>
  );
}
