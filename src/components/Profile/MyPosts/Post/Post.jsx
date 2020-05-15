import React from 'react';
import s from './Post.module.css'

const Post = (props) => {


    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbXKmHRbrWyckJFD0COEkZSXNYmP61vnwKTxq-9Dn1XqFXEWRk&usqp=CAU" alt=""></img>
                {props.message}
                <div>
                    <span>
                        like {props.likeCounts}
                    </span>
                </div>
            </div>
            
    )
}

export default Post;