import React, { useContext } from 'react';
import { AppProvider } from '../../contextProviver/AppContext';

export default function useAddTags() {
  const { app, setApp } = useContext(AppProvider);

  const addTagsHook = val => {
    if (!isContainInTags(val)) {
      setApp({ ...app, tags: [...app.tags, val] });
    } else {
      let filteredTags = app.tags.filter((item, index) => {
        return item != val;
      });
      setApp({ ...app, tags: filteredTags });
    }
  };

  const isContainInTags = index => {
    return app.tags.includes(index);
  };

  return { addTagsHook, isContainInTags };
}
