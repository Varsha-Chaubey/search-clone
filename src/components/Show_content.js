import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { http } from '../remote';

// how to use css modules
import styles from "./Show_content.module.css"

const Show_content = () => {
    const { title } = useParams();
    const [data, setData] = useState({})

    const fetchContent = useCallback(
        async () => {
            const resp = await http.get(`/api/rest_v1/page/summary/${title}`)
            console.log(resp)
            console.log(resp.data)
            setData(resp.data)
        }, [setData])

    useEffect(async () => {
        await fetchContent()
    }, [setData])

    return (
        <div class="data-container">
           <Link to='/'>goback</Link>
            <h1 className={styles.className}>Your selected result  </h1>
            <h2>{data.title}</h2>
            <p>{data.extract}</p>
           
        </div >
        
    )
}

export default Show_content;