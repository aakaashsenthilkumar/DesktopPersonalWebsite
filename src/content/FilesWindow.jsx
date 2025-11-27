export default function FilesWindow() {
  return (
    <div className="content-container">
      <h1 className="content-title">Files</h1>

      <div className="file">
        <h3 className="file-title">Resume</h3>
        <p className="file-type">PDF</p>
        <a
          href="src/assets/Resume_Aakaash_Senthilkumar.pdf"
          download
          className="file-download"
        >
          Download → 
        </a>
      </div>

      <div className="file">
        <h3 className="file-title">Transcript</h3>
        <p className="file-type">PDF</p>
        <a
          href="src/assets/Aakaash_Student_Transcript_2025.pdf"
          download
          className="file-download"
        >
          Download → 
        </a>
      </div>

      <div className="file">
        <h3 className="file-title">Profile Image</h3>
        <p className="file-type">JPEG/PNG</p>
        <a
          href="/files/profile.jpg"
          download
          className="file-download"
        >
          Download → 
        </a>
        <div className="file-preview">
          <img src="src/assets/boy-with-glasses.png" alt="Profile" className="preview-img" />
        </div>
      </div>
    </div>
  );
}
