import { useState } from "react";
import InputScreenshot from "../inputScreenshot/inputScreenshot";
import Menu from "../menu/menu";
import { jsPDF } from "jspdf";

export default function Dashboard() {
  const [images, setImages] = useState([]);
  const [pdfSize, setPdfSize] = useState(null);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  // const [menu, setMenu] = useState(false);

  const handleGeneratePDF = async () => {
    if (!images.length) return;

    setIsGenerating(true);

    let pdf;

    for (let i = 0; i < images.length; i++) {
      const file = images[i].file;

      const imgData = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });

      const img = new Image();
      img.src = imgData;

      await new Promise((resolve) => {
        img.onload = resolve;
      });

      if (i === 0) {
        pdf = new jsPDF({
          orientation: img.width > img.height ? "landscape" : "portrait",
          unit: "px",
          format: [img.width, img.height],
        });
      } else {
        pdf.addPage([img.width, img.height]);
      }

      pdf.addImage(img, "JPEG", 0, 0, img.width, img.height, undefined, "MEDIUM");
    }

    const blob = pdf.output("blob");

    setPdfBlob(blob);
    setPdfSize((blob.size / 1024).toFixed(2));
    setIsGenerating(false);
  };
  const handleDownloadPDF = () => {
    if (!pdfBlob) return;

    const url = URL.createObjectURL(pdfBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "document.pdf";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleImagesChange = (nextImages) => {
    setImages(nextImages);
    setPdfBlob(null);
    setPdfSize(null);
  };

  return (
    <>
      <InputScreenshot images={images} setImages={handleImagesChange} />
      {images.length > 0 && (
        <Menu
          onExport={handleDownloadPDF}
          pdfSize={pdfSize}
          handleGeneratePDF={handleGeneratePDF}
          handleDownloadPDF={handleDownloadPDF}
          isGenerating={isGenerating}
          pdfBlob={pdfBlob}
        />
      )}
    </>
  );
}
