import React from 'react';
import { IStateArticles as Props } from './articles';

export interface IProps {
    id: Props["id"],
    name: Props["name"],
    price: Props["price"],
    onHandleClick: Props["onHandleClick"],
    isArticleSelected: Props["isArticleSelected"]
}

const Article: React.FC<IProps> = ({id, price, name, onHandleClick, isArticleSelected}) => {
    
    return (
        <React.Fragment>
            <div  id='article' onClick={()=> onHandleClick(id, price)}>
                <span style={{top: !isArticleSelected ? "-40px":"0"}} className={'ajout'+id} id={'ajout'}>Ajouté</span>
                <span id='prix'>{price} €</span>
                <p>{name}</p>
            </div>
        </React.Fragment>
    );
}
 
export default Article;