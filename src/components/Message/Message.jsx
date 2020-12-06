import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./Message.scss";

const Message = ({ date, text, avatar, user = {}, className }) => {
  return (
    <div className={cn("message", className)}>
      <div className="message__avatart">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
      </div>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
  avatar: PropTypes.string,
  user: PropTypes.object,
};

export default Message;
