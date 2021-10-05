import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/NoticeCreate.scss';


export default function NoticeCreate({match}) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [imgUrl, setImageUrl] = useState();

    const [fileUrl, setFileUrl] = useState([]);
    const [fileName, setFileName] = useState([]);

    const token = localStorage?.getItem('access_token');
    console.log('토큰 : ',token)
    const config = {
      headers: {"Authorization": `JWT ${token}`}
    }

    const addImage = (e) => {
      //const thumbnail = e.target.files[0]
      //const lookImg = URL.createObjectURL(thumbnail);
      setImageUrl(e.target.files[0])
    }

    // const addFile = (e) => {
    //   const selectFile = e.target.files;

    //   //화면에 보여질 이름 리스트
    //   const fileNameList = []
    //   for(let i = 0; i<selectFile.length; i+=1) {
    //     const selectName = selectFile[i].name
    //     fileNameList.push(selectName)
    //     setFileUrl(selectFile[i])
    //   }
    //   console.log("파일 이름 리스트",fileNameList)
    //   setFileName(fileNameList)
    // }

    const onSubmit = async (e) => {
      e.persist();
      e.preventDefault();

      console.log("이타겟", e.target)
      console.log("썸네일 타겟", e.target.image.value)

      const formData = new FormData();
      // formData.append('thumbnail', e.target.thumbnail.value);
      // formData.append('title', e.target.title.value);
      // formData.append('content', e.target.content.value);
      // formData.append('thumbnail', e.target.thumbnail.value);

      //formData.append('access_token', content);

      // for (let i=0; i>fileUrl.length; i++) {
      //   formData.append('files['+i+']', fileUrl[i]);
      //   console.log("파일 하나하나의 정보는?", fileUrl[i])
      // }
      
      const postBoard = await fetch('http://172.30.1.58:8000/api/v1/board/1/post',{
        method: 'POST',
        headers:{
          Authorization: `jwt ${token}`,
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(
          {
            title: e.target.title.value,
            content: e.target.content.value,
            thumbnail: e.target.image.value
          }
        ), 
      })
      const resData = await postBoard.json(); 
      console.log(resData)
      
      // axios.post('http://3.35.43.53/api/v1/board/1/post', config, formData)
      // .then((res) => {console.log(res)})
      // .catch((err) => {console.log("업로드 실패")})
    }

  return(
    <div className="whole_container">

      <div className="title_text">공지작성</div>

      <form className="input_container" onSubmit={onSubmit}>
        <input 
          name="title"
          className="titleInput"
          placeholder="제목" 
          // value={title} 
          onChange={(e)=> setTitle(e.target.value)}>       
        </input>

        <textarea
          name="content"
          className="ContentInput" 
          placeholder="내용" 
          // value={content}
          // onChange={(e)=> setContent(e.target.value)}
        >
        </textarea>
        <input type='file'
          // name="thumbnail"
          id='image'
          accept='image/*'
          name='image'
          //onChange={addImage} 
        >
        </input>

        <div className="fileContainer">
          {/* <button>+</button> */}
 

          {/* <input type='file'
            id='file'
            multiple="multiple"
            accept='file/*'
            name='file'
            onChange={addFile} >
          </input> */}

          <div className="file_list">
            {fileName.map((c, i)=> {
              return(<div>{c}</div>)
            })}
          </div>
        </div>
        <input type="submit" value="SUBMIT" />

      </form >

      {/* <button className="saveButton" onClick={()=>onSubmit()}>저장</button> */}

      
    </div>
  );
}