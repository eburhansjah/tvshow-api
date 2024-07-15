import {useTvShow} from './fetcher.js';
import Child from './Child';

import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin: 0 20px;
    background-color: #212121;

    h1 {
        text-align: center;
        color: #bd9700;
    }
`

const ParentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 columns
    gap: 10px;
    width: 100%;
    max-width: 1000px;
    //flex-direction: column;
    //align-items: center;
    //padding: 20px;
    background-color: #212121;
    margin: 0 10px;
`

export default function Parent(){
    const {data, error, isLoading} = useTvShow();

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return(
        <>
            <PageWrapper>
                <h1>US & Canada TV Show API</h1>
                <ParentWrapper>
                    {data.map((show) => (
                        <Child key={show.id} show={show}/>
                    ))}
                </ParentWrapper>
            </PageWrapper>
        </>
    );
}