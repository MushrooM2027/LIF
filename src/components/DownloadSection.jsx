import { Button } from 'react-bootstrap';

const DownloadSection = () => (
  <section id="downloads">
    <h2>Download Lif STUDIO</h2>
    <Button variant="primary" className="m-2">Windows</Button>
    <Button variant="success" className="m-2">Linux</Button>
    <Button variant="dark" className="m-2">macOS</Button>
  </section>
);

export default DownloadSection;