import React, { useState } from 'react';
import Article from './article';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { IState as IProps } from './main';
import { RootState } from '../state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export interface IStateArticles {
    selected:{
        id: number,
        price: number
    }[],
    articleSelected: {
        [key: string]: boolean
    },
    id: number,
    name: string,
    price: number,
    onHandleClick: (id: number, price: number) => void,
    isArticleSelected: boolean
}

const Articles: React.FC<IProps> = ({data}) => {
    const [selected, setSelected] = useState<IStateArticles["selected"]>([]);
    const [articleSelected, setArticleSelected] = useState<IStateArticles["articleSelected"]>({});
    const dispatch = useDispatch();
    const { sumArticles } = bindActionCreators(actionCreators, dispatch);

    const sumUp = (boughtArticles: IStateArticles["selected"]) => {
        var result: number = 0;
        boughtArticles.map(item => result += item.price);
        console.log("Sum", result);
        sumArticles(result);
        // dispatch({ type: 'SUM', action: result });
        // onSum(result);
    }

    const handleClick = (id: number, price:number ) => {
        console.log("selected",selected);
        var fakeSelected = selected;
        var res = selected.filter(item => item.id === id);
        console.log("Res",res);
        if(res.length === 0) {
          fakeSelected.push({id, price});
          setSelected(fakeSelected);
        //   this.setState({selected:fakeSelected}, () => this.sumUp())
          sumUp(fakeSelected);
          return setArticleSelected({...articleSelected, ["articleSelected"+id]: true});
        }
        fakeSelected = selected.filter(item => item.id !== id);
        console.log(fakeSelected, selected);
        setArticleSelected({...articleSelected, ["articleSelected"+id]: false});
        setSelected(fakeSelected);
        sumUp(fakeSelected);
        // this.setState({selected:fakeSelected}, () => this.sumUp())
    }
    return (
        <React.Fragment>
            <h3 id='articles-services'><span>Nos</span> services</h3>
            <div id='articles-bar-cont'>
                <p id='articles-bar'></p>
            </div>
            <Grid container spacing={2} style={{display:"flex", justifyContent:"center"}}>
                {data.map(({id, name, price}, index) => { 
                    const variableIdx:string = "articleSelected" + id;
                    return (
                        <Grid key={index} item xs={12} md={4} xl={4}>
                            <Article id={id} name={name} price={parseFloat(price)} onHandleClick={handleClick} isArticleSelected={articleSelected[variableIdx]}></Article>
                        </Grid>
                    )}
                )}
            </Grid>
            <div id="spacer"></div>
        </React.Fragment>
    )
}
 
export default Articles;