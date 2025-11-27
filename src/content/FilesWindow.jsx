import resumePDF from "../assets/Resume_Aakaash_Senthilkumar.pdf";
import transcriptPDF from "../assets/Aakaash_Student_Transcript_2025.pdf";
import profileIMG from "../assets/boy-with-glasses.png";

export default function FilesWindow() {
  return (
    <div className="content-container">
      <h1 className="content-title">Files</h1>

      <div className="file">
        <h3 className="file-title">Resume</h3>
        <p className="file-type">PDF</p>
        <a href={resumePDF} download className="file-download">
          Download →
        </a>
      </div>

      <div className="file">
        <h3 className="file-title">Transcript</h3>
        <p className="file-type">PDF</p>
        <a href={transcriptPDF} download className="file-download">
          Download →
        </a>
      </div>

      <div className="file">
        <h3 className="file-title">Profile Image</h3>
        <p className="file-type">PNG</p>

        <a href={profileIMG} download className="file-download">
          Download →
        </a>

        <div className="file-preview" style={{ marginTop: "10px" }}>
          <img src={profileIMG} alt="Profile" className="preview-img" style={{ width: "120px", borderRadius: "8px" }} />
        </div>
      </div>
    </div>
  );
}