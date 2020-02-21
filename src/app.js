import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import './app.css';
import { getData } from "./api";
import FirstPage from './firstPage';
import Details from './details';
import Header from './header';
import {Route} from 'react-router-dom';

export default function App() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    getData().then(setData);
  }, []);

    const onItemSelected = (item) => {
        setItem(item);
    };

    const refreshState = () => {
        setItem({})
    }
    return (
        <div style={{padding: '20px'}}>
            <Header refreshState={refreshState}/>
            {
                Object.keys(item).length === 0 ? (
                    <Route
                        path='/'
                        exact
                        render={() => <FirstPage 
                                        data={data}
                                        onItemSelected={onItemSelected}
                                        />
                                }/>
                ) : (
                    <Details item={item}/>
                )
            }
            






            {/* <Route
                path='/:id'
                render={
                    ({match, history}) => {
                        const id = match.params;
                        return <Details 
                            data={data} 
                            id={id} 
                            onItemSelected={itemId => history.push(itemId)}/>
                    }
                }/> */}
        </div>
    // <Layout>
    //   <pre>
    //     { JSON.stringify(data, null, 2) }
    //   </pre>
    // </Layout>
  );
}
