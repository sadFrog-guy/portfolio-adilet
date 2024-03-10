import './WorkCaseTiser.css';
import { Link } from 'react-router-dom';

const WorkCase = ({
  props: { imgSmall, imgMedium, imgLarge, imgXl, desc, title, name, ...props },
}) => {
  return (
    <div className='workPreview'>
      <div className='left'>
        <div className='inner'>
          <div className='titleWrapper' style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {props?.haveLink 
              ? (
                <a href={`${name}`}>
                  <h3 className='title'>
                    <span className='arrow'> {'>'} </span>
                    {title}
                  </h3>
                </a>
              )
              : props?.isPetList ?
                props?.petList.map(item => {
                  return (
                    <a href={`${item.link}`}>
                      <h3 className='title' style={{fontSize: '18px'}}>
                        <span className='arrow'> {'>'} </span>
                        {item.name}
                      </h3>
                    </a>
                  )
                })
              : (
                  <h3 className='title'>
                    {title}
                  </h3>
                ) 
            }

              {/* (
                <h3 className='title'>
                  {title}
                </h3>
              ) */}
            
          </div>
          <p className='descriptions'>{desc}</p>
        </div>
      </div>
      <div className='right'>
        <a href={`${name}`}>
          <div className='inner'>
            <div className='image xl'>
              <img src={imgXl} alt='' className='screenShot' />
            </div>
            <div className={props?.isKwork ? 'image kwork' : 'image large scroll'}>
              <img src={imgLarge} alt='' className='screenShot' />
            </div>
            <div className='image medium'>
              <img src={imgMedium} alt='' className='screenShot' />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WorkCase;

