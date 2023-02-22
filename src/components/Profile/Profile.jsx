import PT from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsList = [
    { label: 'Followers', quantity: stats.followers },
    { label: 'Views', quantity: stats.views },
    { label: 'Likes', quantity: stats.likes },
  ];

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        {statsList.map(el => (
          <li key={el.label}>
            <span className={css.label}>{el.label}</span>
            <span className={css.quantity}>{el.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PT.string,
  tag: PT.string,
  location: PT.string,
  avatar: PT.string,
  stats: PT.shape({
    follwers: PT.number,
    views: PT.number,
    likes: PT.number,
  }),
};
