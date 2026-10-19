import styles from "./menu.module.css";

export default function Menu({
  pdfSize,
  pdfBlob,
  handleGeneratePDF,
  handleDownloadPDF,
  isGenerating,
}) {
  return (
    <>
      <div className={styles.menu}>
        <footer>
          {!pdfBlob && (
            <button onClick={handleGeneratePDF}>
              {isGenerating ? "Generating..." : "Generate PDF"}
            </button>
          )}

          {pdfBlob && <button onClick={handleDownloadPDF}>Download PDF</button>}
        </footer>
        {pdfSize && <p>{pdfSize} KB</p>}  
      </div>
    </>
  );
}
