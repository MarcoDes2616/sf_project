import React from 'react';
import DiamondIcon from '@mui/icons-material/Diamond';

const PostCard = (post, premium) => {
    
    const {id, title, description, imageUrl, tag, user, createdAt} = post
    const date = new Date(createdAt).toLocaleString();
    const summary = description.slice(0, 50) + "..."
    return (
        <div className="post_card">
            <img src={imageUrl} alt={title} className="post_card_image" />
            <div className="post_card_content">
                <h3 className="post_card_title">{title} {premium == true && <DiamondIcon />}</h3>
                <p className="post_card_category">{tag.tag}</p>
                <p className="post_card_author">Por {user.name + " " + user.lastname}</p>
                <p className="post_card_date">{date}</p>
                <p className="post_card_summary">{summary}</p>
                <a href={`/#/blog/post/${id}`} className="post_card_link" rel="noopener noreferrer">
                    Leer más
                </a>
            </div>
        </div>
    );
};

export default PostCard;
