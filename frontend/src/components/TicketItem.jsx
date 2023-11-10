import { Link } from 'react-router-dom';

function TicketItem(ticket) {
  return (
    <div className='ticket'>
      <div>
        {new Date(ticket.ticket.createdAt).toLocaleString('en-US')}
      </div>
      <div>{ticket.ticket.product}</div>
      <div className={`status status-${ticket.ticket.status}`}>
        {ticket.ticket.status}
      </div>
      <Link
        to={`/ticket/${ticket.ticket._id}`}
        className='btn btn-reverse btn-sm'
      >
        View
      </Link>
    </div>
  );
}

export default TicketItem;
