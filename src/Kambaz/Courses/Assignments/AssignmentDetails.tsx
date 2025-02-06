
type DetailsProps= {
  aName: string;
  aAvailDate: string;
  aDueDate: string;
}

export default function AssignmentDetails({aName, aAvailDate, aDueDate}: DetailsProps) {

  return (
    <span id="wd-assignment-details">
      <span id="wd-assignment-name">{aName}</span>
      <span>
        <span className="wd-detail-a text-danger">
          Multiple Modules
        </span>
        <span className="wd-detail-separator"> | </span>
        <span className="wd-detail-a font-weight-bold">
          Not available until
        </span> 
        &nbsp;
        <span className="wd-detail-a">
          {aAvailDate}
        </span>
        <span className="wd-detail-separator"> | </span>
        <span className="wd-detail-a font-weight-bold">
          Due 
        </span>
        &nbsp;
        <span className="wd-detail-a">
          {aDueDate}
        </span>
        <span className="wd-detail-separator"> | </span>
        <span className="wd-detail-a">
          100 pts
        </span> 
      </span>
    </span>
  );
}