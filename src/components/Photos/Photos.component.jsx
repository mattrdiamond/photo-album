import React, { useState, useEffect } from "react";
import Photo from "../Photo/Photo.component";
import Spinner from "../Spinner/Spinner.component";
import Grid from "../Grid/Grid.component";
import { placeholderAPI } from "../../API/API";
import "./Photos.styles.scss";

const Photos = ({ location }) => {
  const { title, id } = location.state;
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const photos = await placeholderAPI(`albums/${id}/photos`);
      if (isMounted) {
        setPhotos(photos);
      }

      return () => (isMounted = false);
    })();
  }, [id]);

  return (
    <div className="photos">
      <h1>{title}</h1>
      <Grid>
        {photos ? (
          photos.map(({ id, ...props }) => <Photo key={id} {...props} />)
        ) : (
          <Spinner />
        )}
      </Grid>
    </div>
  );
};

export default Photos;
