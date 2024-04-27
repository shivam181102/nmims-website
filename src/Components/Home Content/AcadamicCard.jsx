import Card from 'react-bootstrap/Card';
function Localcard(){
    return(<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Text>26-Apr-2024 07:00:00 PM</Card.Text>
      <Card.Title>Operations Management</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Session 6 (Teaching)</Card.Subtitle>
      <Card.Text>
      Common For All Batches
      </Card.Text>
      <Card.Subtitle>Prof. Praful More</Card.Subtitle>
      <i class="bi bi-camera-video"></i>
      
    </Card.Body>
  </Card>)
}








function AcadamicCard() {
  return (
    <div className='d-flex align-items-center justify-content-around flex-wrap'>
        <Localcard/>
        <Localcard/>
        <Localcard/>
        <Localcard/>
    </div>
  );
}

export default AcadamicCard;