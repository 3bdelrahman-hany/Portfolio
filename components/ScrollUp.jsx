import {useRef,useEffect} from "react"
import style from "./ScrollUp.module.css"
function ScrollUp(){

 const btn = useRef(null);
    useEffect(() =>{
        const handleScroll =()=>{
        if(window.scrollY === 0){
            btn.current.classList.add(style.hide)
        }
        else{
            btn.current.classList.remove(style.hide)
        }
       
    }
    handleScroll();
     window.addEventListener("scroll",handleScroll);

     return ()=> window.removeEventListener("scroll",handleScroll);
    },[])



  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <>
            <button className={style.button} onClick={handleClick} ref={btn}>
                <svg className={style.svgIcon} viewBox="0 0 384 512">
                    <path
                    d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

        </>
    )
}
export default ScrollUp;