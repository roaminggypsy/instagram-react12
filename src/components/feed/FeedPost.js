import React from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {MoreIcon, CommentIcon, ShareIcon, UnlikeIcon, LikeIcon, RemoveIcon, SaveIcon} from '../../icons';
import { Link } from "react-router-dom";
import { Typography, Button, Hidden, Divider, TextField } from "@material-ui/core";
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

function FeedPost({post}) {
  const classes = useFeedPostStyles();
  const [ showCaption, setCaption] = React.useState(false);
  const { caption, comments, id, likes, media, user } = post;

  return (
    <>
      <article className={classes.article}>
        {/* Feed Post Header */}
        <div className={classes.postHeader}>
          <UserCard user={user}/>
          <MoreIcon className={classes.MoreIcon}/>
        </div>
        {/* Feed Post Image */}
        <div>
          <img src={media} alt="Post media" className={classes.image}/>
        </div>
        {/* Feed Post Buttons */}
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton/>
            <Link to={`/p/${id}`}>
              <CommentIcon/>
            </Link>
            <ShareIcon/>
            <SaveButton/>
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? '1 like' : `${likes} likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography 
                className={classes.username}
                component="span"
                variant="subtitle2"
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography 
                component="span" 
                dangerouslySetInnerHTML={{ __html: caption}}
                variant="body2"
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  basedOn="letters"
                  className={classes.caption}
                  ellipsis="..."
                  maxLine="0"
                  unsafeHTML={caption}
                />
                <Button className={classes.moreButton}
                  onClick={()=>setCaption(true)}
                >
                  more
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography 
              className={classes.commentsLink} 
              component="div" 
              variant="body2"
            >
              View all {comments.length} comments
            </Typography>
          </Link>
          {comments.map(comment=>(
            <div key={comment.id}>
              <Link to={`/${comment.user.username}`}>
                <Typography
                  className={classes.commentUsername}
                  component="span"
                  variant="subtitle2"
                >
                  {comment.user.username}
                </Typography>{" "}
                <Typography
                  component="span"
                  variant="body2"
                >
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography
            className={classes.datePosted}
            color="textSecondary"
          >
            5 DAYS AGO
          </Typography>
          </div>
        <Hidden xsDown>
          <Divider/>
          <Comment/>
        </Hidden>
        </article>
      </>
  );
}

function Comment(){
  const classes = useFeedPostStyles();
  const [content, setContent] = React.useState('');

  return (
    <div className={classes.commentContainer}>
      <TextField
        fullWidth
        value={content}
        placeholder="Add a comment ..."
        multiline
        rowsMax={2}
        rows={1}
        onChange={event => setContent(event.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline
          }
        }}
        className={classes.textField}
      />
      <Button color="primary" className={classes.commentButton} disabled={!content.trim()}>
        Post
      </Button>
    </div>
  );
}

function LikeButton(){
  const classes = useFeedPostStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.liked : classes.like;
  const onClick = liked ? handleUnlike : handleLike;

  function handleLike(){
    setLiked(true);
  }

  function handleUnlike(){
    setLiked(false);
  }

  return (
    <Icon className={className} onClick={onClick}/>
  );
}

function SaveButton(){
  const classes = useFeedPostStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave(){
    setSaved(true);
  }

  function handleRemove(){
    setSaved(false);
  }

  return (
    <Icon className={classes.saveIcon} onClick={onClick}/>
  );
}

export default FeedPost;
