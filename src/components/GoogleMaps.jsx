import React, { useRef, useEffect } from 'react';

const GoogleMap = ({ location, apiKey }) => {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.addEventListener('load', initMap);

    return () => {
      script.removeEventListener('load', initMap);
    };
  }, [apiKey]);

  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: location.lat, lng: location.lng },
      zoom: 15,
    });

    new window.google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: 'Event Location',
    });
  };

  return <div ref={mapRef} style={{ height: '400px' }}></div>;
};

export default GoogleMap;
