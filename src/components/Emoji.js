import React, { useState } from 'react'

export default function Emoji(props) {
 
    const [emoji, setEmoji] = useState([]);

    const selectEmoji = (e) => {
        let selectedEmoji = e.target.innerText;
        setEmoji([emoji + selectedEmoji]);
      }
    
      const handleOnChange = (e) => {
        setEmoji(e.target.value);
      }
    
      const handleClear = () => {
        setEmoji("");
      }
    
      const handleCopy = () => {
        navigator.clipboard.writeText(emoji);
        alert("Copied to clipboard!");
      }


  return (
    <section id ='emoji'>
      <div className="container my-5">
      <h3 className="post-title entry-title" style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white', 
 color:props.mode=== 'dark'?'white': 'black', fontSize: "33px"}}>Emoji Copy and Paste</h3>
      <textarea className="form-control my-5" placeholder="Select Emoji to copy...." id="Emoji" value={emoji} rows="1"
 onChange ={handleOnChange} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white', 
 color:props.mode=== 'dark'?'white': 'black', fontSize: "33px"}} ></textarea>
 <div  className="copyclear"><button  className="copy" onClick={handleCopy}>Copy</button><button  className="clear"onClick={handleClear}>Clear</button></div>
 <div className="EmojiContainer my-4">
 <span className="emoji" onClick={selectEmoji}c style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😀" title="grinning face">😀</span>
 <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😃" title="grinning face with big eyes">😃</span>
 <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😀" title="grinning face">😀</span>
 <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😃" title="grinning face with big eyes">😃</span>
 <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😄" title="grinning face with smiling eyes">😄</span>
 <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😁" title="beaming face with smiling eyes">😁</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😆" title="grinning squinting face">😆</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😅" title="grinning face with sweat">😅</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="🤣" title="rolling on the floor laughing">🤣</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😂" title="face with tears of joy">😂</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="🙂" title="slightly smiling face">🙂</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="🙃" title="upside-down face">🙃</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😉" title="winking face">😉</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😊" title="smiling face with smiling eyes">😊</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😇" title="smiling face with halo">😇</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="🥰" title="smiling face with hearts">🥰</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😍" title="smiling face with heart-eyes">😍</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="🤩" title="star-struck">🤩</span>
  <span className="emoji" onClick={selectEmoji}  style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}} data-clipboard-text="😘" title="face blowing a kiss">😘</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😗" title="kissing face">😗</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😙" title="kissing face with smiling eyes">😙</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😋" title="face savoring food">😋</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😚" title="kissing face with closed eyes">😚</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😛" title="face with tongue">😛</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😜" title="winking face with tongue">😜</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤪" title="zany face">🤪</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😝" title="squinting face with tongue">😝</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤑" title="money-mouth face">🤑</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤗" title="hugging face">🤗</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤭" title="face with hand over mouth">🤭</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤫" title="shushing face">🤫</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤔" title="thinking face">🤔</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤐" title="zipper-mouth face">🤐</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤨" title="face with raised eyebrow">🤨</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😐" title="neutral face">😐</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😑" title="expressionless face">😑</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😶" title="face without mouth">😶</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😏" title="smirking face">😏</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😒" title="unamused face">😒</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🙄" title="face with rolling eyes">🙄</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😬" title="grimacing face">😬</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤥" title="lying face">🤥</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😌" title="relieved face">😌</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😔" title="pensive face">😔</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😪" title="sleepy face">😪</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤤" title="drooling face">🤤</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😴" title="sleeping face">😴</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="😷" title="face with medical mask">😷</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤒" title="face with thermometer">🤒</span>
  <span className="emoji" onClick={selectEmoji} style={{ backgroundColor:props.mode==='dark'? '#1b1e217a': 'white'}}  data-clipboard-text="🤕" title="face with head-bandage">🤕</span>
  </div> 
      </div>
    </section>
  )
}
