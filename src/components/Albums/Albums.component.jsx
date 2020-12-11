import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { placeholderAPI } from "../../API/API";
import Album from "../Album/Album.component.jsx";
import Spinner from "../Spinner/Spinner.component";
import Grid from "../Grid/Grid.component";
import "./Albums.styles.scss";

const Albums = () => {
  const [albums, setAlbums] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const albums = await placeholderAPI(`users/${id}/albums`);
      if (isMounted) {
        setAlbums(albums);
      }

      return () => (isMounted = false);
    })();
  }, [id]);

  return (
    <div className="albums">
      <h1>Albums</h1>
      <Grid>
        {!albums ? (
          <Spinner />
        ) : (
          albums.map(({ id, ...otherProps }, index) => (
            <Album key={id} id={id} index={index} {...otherProps} />
          ))
        )}
      </Grid>
    </div>
  );
};

export default Albums;
