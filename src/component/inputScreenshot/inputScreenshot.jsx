import styles from "./inputScreenshot.module.css";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageCrop,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateType,
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
        acceptedFileTypes={["image/png", "image/jpeg"]}
        fileValidateTypeLabelExpectedTypes="Apenas PNG ou JPG"
        allowPaste
        allowReorder
        storeAsFile
        name="images"
        labelIdle="Drag & drop your screenshots or paste (Ctrl + V)"
      />
    </div>
  );
}
