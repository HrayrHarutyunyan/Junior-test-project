import React from 'react'
import style from "./bookDes.module.scss"
import Button from '../button/Button'

function BookDes({ img, bookName, content }) {
  return (
    <div className={style.content}>
      <div className={style.bookImg}>
        {img}
      </div>
      <div className={style.bookDes}>
        <div className={style.title}>
          <h4>{bookName}</h4>
          <p>{content}</p>
        </div>
        <div className={style.list}>
          <ul>
            <li>
              <p className={style.describe}>Pages:</p>
              <p>586pages</p>
            </li>
            <li>
              <p className={style.describe}>Length:</p>
              <p>10 Hours</p>
            </li>
          </ul>
        </div>
        <Button/>
      </div>

    </div>
  )
}

export default BookDes