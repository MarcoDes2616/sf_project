// utils/PostCard.js
import React from 'react';

const PostCard = (post) => {
    const {id, title, description, imageUrl, tag, user, createdAt} = post
    return (
        <div className="post_card">
            <img src={imageUrl} alt={title} className="post_card_image" />
            <div className="post_card_content">
                <h3 className="post_card_title">{title}</h3>
                <p className="post_card_category">{tag.tag}</p>
                <p className="post_card_author">Por {user.name + " " + user.lastname}</p>
                <p className="post_card_date">{new Date(createdAt).toLocaleString}</p>
                <p className="post_card_summary">{description.slice(0, 50) + "..."}</p>
                <a href={`/#/blog/${id}`} className="post_card_link" target="_blank" rel="noopener noreferrer">
                    Leer más
                </a>
            </div>
        </div>
    );
};

export default PostCard;
