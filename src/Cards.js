import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export function Cards({ ele }) {
  return (
    <div className='col-lg-4'>
      <div className='card mb-5 mb-lg-0'>
        <div className='card-body'>
          <h5 className='card-title text-muted text-center'>{ele.plan}</h5>
          <h6 className='card-price text-center'>${ele.price}<sub className='month'>/month</sub></h6>
          <hr></hr>
          <ul className='details'>
            {ele.features.map((item) => {
              return <li className={item.listType ? 'text-muted' : ''}>
                <span>{item.listType ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}</span>
                {item.usersHighlight ? <b>{item.title}</b> : item.title}
              </li>;
            })}
          </ul>
          <div className='button'>
            <a href="#" className="btn text-uppercase btn-block">{ele.buttonType}</a>
          </div>
        </div>
      </div>
    </div>
  );
}