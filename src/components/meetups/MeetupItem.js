import { useContext } from 'react';
import Card from '../ui/Card';
import './MeetupItem.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address:props.address
            });
        }
    }
    return (
        <li className='item'>
            <Card>
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='content'>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className='actions'>
                    <button onClick={toggleFavoriteStatusHandler}>{ itemIsFavorite?'Remove From Favorites':'To Favorites'}</button>
            </div>
            </Card>
        </li>
    )
}
export default MeetupItem;