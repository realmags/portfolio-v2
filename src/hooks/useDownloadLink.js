import React, { useState } from "react";
import { storage } from "../firebase/config";

const useDownloadLink = (file) => {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const storageRef = storage.ref();

  const fileRef = storageRef.child(file);

  fileRef
    .getDownloadURL()
    .then((url) => {
      setUrl(url);
    })
    .catch((error) => {
      console.log("ERROR GET: ", error.code);
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          setError("Error: Object not found");
          break;
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          setError("Error: Unauthorized access");
          break;
        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          setError("Error: Unknown");
          break;
      }
    });

  return [url, error];
};

export default useDownloadLink;
