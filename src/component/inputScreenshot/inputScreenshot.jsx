import styles from "./inputScreenshot.module.css";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
);

export default function InputScreenshot({ images, setImages }) {
  return (
    <div className={styles.filePondBox}>
      <FilePond
        files={images}
        onupdatefiles={(fileItems) => {
          setImages([...fileItems]);
        }}
        allowMultiple
        allowDrop
        allowPaste
        allowReorder
        storeAsFile
        name="images"
        labelIdle="Drag & drop your screenshots or paste (Ctrl + V)"
      />
    </div>
  );
}
